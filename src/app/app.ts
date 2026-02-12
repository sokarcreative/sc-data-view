import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScDataView} from '@sokarcreative/sc-data-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScDataView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sc-data');
}
