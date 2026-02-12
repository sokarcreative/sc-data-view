import {SimpleViewData} from './simple-view-data';

export type Views<ItemType, Params = any> = {
  simple?: SimpleViewData<ItemType, Params>
}
