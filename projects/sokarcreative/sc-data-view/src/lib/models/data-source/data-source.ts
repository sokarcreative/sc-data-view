import {Observable} from 'rxjs';

export interface DataSource<ItemType extends object = any> {
  getItems: () => Observable<ItemType[]>
}
