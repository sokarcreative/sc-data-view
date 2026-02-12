import {SimpleViewComponent} from '../../components/simple-view/models/simple-view-component';
import {Type} from '@angular/core';

export type SimpleViewData<ItemType, Params> = {
  component: Type<SimpleViewComponent<ItemType, Params>>
}
