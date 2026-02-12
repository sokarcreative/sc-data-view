import {OutputEmitterRef, WritableSignal} from '@angular/core';
import {DataCall} from '../../../models/data-call';

export interface SimpleViewComponent<ItemType, Params> {
  dataCall: WritableSignal<DataCall<ItemType[], Params> | null>
  refresh: OutputEmitterRef<void>
}
