import {Component, effect, input, OnDestroy, signal,} from '@angular/core';
import {LocalDataSource} from './models/data-source/local-data-source';
import {EasyCall} from './models/easy-call';
import {DataCall} from './models/data-call';
import {Subscription} from 'rxjs';
import {call} from './shared/utils';
import {Views} from './models/view/views';
import {SimpleView} from './components/simple-view/simple-view';

@Component({
  selector: 'lib-sc-data-view',
  imports: [
    SimpleView
  ],
  templateUrl: './sc-data-view.html',
})
export class ScDataView<ItemType extends object = any> implements OnDestroy {

  view = input.required<Views<ItemType>>()

  loadingComponent = input<any | null>(null);
  dataComponent = input<any | null>(null);

  dataSource = input.required<LocalDataSource<ItemType>>();

  dataCall = signal<DataCall<ItemType[], any> | null>(null)

  easyCall = signal<EasyCall<ItemType[], any> | null>(null);

  subscription?: Subscription | null;

  constructor() {
    effect(() => {
      const easyCall = this.easyCall();
      this.subscription?.unsubscribe()
      if (easyCall != null) {
        easyCall.dataCallSubject.subscribe((dataCall) => {
          this.dataCall.set(dataCall)
        })
        this.subscription = easyCall.observable.subscribe()
      }
    });
    effect(() => {
      const dataSource = this.dataSource();
      if (dataSource != null) {
        this.easyCall.set(call({
          request: dataSource.getItems()
        }))
      } else {
        this.easyCall.set(null)
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
