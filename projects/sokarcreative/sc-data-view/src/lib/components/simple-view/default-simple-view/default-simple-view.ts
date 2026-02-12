import {Component, output, signal} from '@angular/core';
import {DataCall} from '../../../models/data-call';
import {SimpleViewComponent} from '../models/simple-view-component';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'lib-default-simple-view',
  imports: [
    JsonPipe
  ],
  templateUrl: './default-simple-view.html',
  styleUrl: './default-simple-view.css',
})
export class DefaultSimpleView<ItemType, Params> implements SimpleViewComponent<ItemType, Params> {
  dataCall = signal<DataCall<ItemType[], Params> | null>(null)
  refresh = output<void>()
}
