import {CallRefresher, EasyCall} from '../models/easy-call';
import {BehaviorSubject, catchError, EMPTY, mergeMap, observable, Observable, Subject, tap} from 'rxjs';
import {DataCall} from '../models/data-call';

export function call<Data, Params>(options: {
  params?: Params | undefined | null,
  request: Observable<Data>
}): EasyCall<Data, Params> {
  const refresherSubject: Subject<Date> = new BehaviorSubject<Date>(new Date())

  const dataCallBehaviorSubject = new BehaviorSubject<DataCall<Data, Params>>({
    isRunning: true,
    params: options.params
  })

  const observable = refresherSubject.pipe(mergeMap(() => {
    if (!dataCallBehaviorSubject.value?.isRunning) {
      dataCallBehaviorSubject.next({
        isRunning: true,
        params: options.params
      })
    }
    return options.request.pipe(catchError(err => {
      dataCallBehaviorSubject.next({
        error: err,
        params: options.params,
        isError: true,
      })
      return EMPTY
    }))
  })).pipe(tap({
    next: data => {
      dataCallBehaviorSubject.next({
        isSuccess: true,
        params: options.params,
        data: data
      })
    },
    error: err => {
      dataCallBehaviorSubject.next({
        isError: true,
        params: options.params,
        error: err
      })
    }
  }))

  return {
    observable: observable,
    dataCallSubject: dataCallBehaviorSubject,
    refresher: new CallRefresher(refresherSubject),
  }
}
