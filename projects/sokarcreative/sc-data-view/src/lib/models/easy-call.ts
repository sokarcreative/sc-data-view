import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {DataCall} from './data-call';

export type EasyCall<Data, Params> = {
  observable: Observable<Data>
  dataCallSubject: Subject<DataCall<Data, Params>> & { getValue(): DataCall<Data, Params>; }
  refresher: CallRefresher
}

export class CallRefresher {
  constructor(private refresherSubject: Subject<Date>) {
  }

  refresh() {
    this.refresherSubject.next(new Date())
  }
}
