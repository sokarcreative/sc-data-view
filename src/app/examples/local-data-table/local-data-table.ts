import {Component, signal} from '@angular/core';
import {DefaultSimpleView, LocalDataSource, ScDataView, Views} from '@sokarcreative/sc-data-view';
import {delay, of} from 'rxjs';
import {User} from './models/user';
import {range} from '../../shared/utils';

@Component({
  selector: 'app-local-data-table',
  imports: [
    ScDataView
  ],
  templateUrl: './local-data-table.html',
  styleUrl: './local-data-table.css',
})
export class LocalDataTable {

  mockedUsersLocalDataSource = signal<LocalDataSource<User>>({
    getItems: () => {
      return of(range(1, 10).map((index) => {
        return {
          username: "User " + index,
          email: "user" + index + "@random.com",
        }
      })).pipe(delay(300));
    }
  });

  protected view = signal<Views<User>>({
    simple: {
      component: DefaultSimpleView
    }
  })
}
