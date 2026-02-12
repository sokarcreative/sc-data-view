import {Component, output, signal} from '@angular/core';
import {User} from '../models/user';
import {DataCall, SimpleViewComponent} from '@sokarcreative/sc-data-view';
import {JsonPipe} from '@angular/common';
import {Button} from 'primeng/button';
import {ProgressSpinner} from 'primeng/progressspinner';

@Component({
  selector: 'app-custom-simple-view',
  imports: [
    JsonPipe,
    Button,
    ProgressSpinner
  ],
  templateUrl: './custom-simple-view.html',
  styleUrl: './custom-simple-view.css',
})
export class CustomSimpleView implements SimpleViewComponent<User, any> {
  dataCall = signal<DataCall<User[], any> | null>(null);
  refresh = output<void>();
}
