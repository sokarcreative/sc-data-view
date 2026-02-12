import {Component, computed, signal} from '@angular/core';
import {DefaultSimpleView, LocalDataSource, ScDataView, Views} from '@sokarcreative/sc-data-view';
import {delay, of} from 'rxjs';
import {User} from './models/user';
import {range} from '../../shared/utils';
import {Select} from 'primeng/select';
import {FormsModule} from '@angular/forms';
import {CustomSimpleView} from './custom-simple-view/custom-simple-view';

@Component({
  selector: 'app-simple-local-data-view',
  imports: [
    ScDataView,
    Select,
    FormsModule
  ],
  templateUrl: './simple-local-data-view.html',
  styleUrl: './simple-local-data-view.css',
})
export class SimpleLocalDataView {

  simpleViewOptions: { key: string, label: string }[] = [
    {
      key: "default",
      label: "Default"
    },
    {
      key: "custom",
      label: "Custom"
    }
  ];

  protected simpleViewSelected = signal<string>(this.simpleViewOptions[0].key);

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

  view = computed<Views<User>>(() => {
    const simpleViewSelected = this.simpleViewSelected();
    return {
      simple: {
        component: (simpleViewSelected == 'default') ? DefaultSimpleView : CustomSimpleView
      }
    }
  })

}
