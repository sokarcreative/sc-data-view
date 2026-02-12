import {DataSource} from './data-source';
import {Observable} from 'rxjs';

export type LocalDataSource<ItemType extends object = any> = {
  getItems: () => Observable<ItemType[]>
} & DataSource<ItemType>
