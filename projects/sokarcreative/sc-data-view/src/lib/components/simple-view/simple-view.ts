import {
  AfterViewInit,
  Component,
  ComponentRef,
  effect,
  input,
  output,
  signal,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DataCall} from '../../models/data-call';
import {SimpleViewData} from '../../models/view/simple-view-data';
import {SimpleViewComponent} from './models/simple-view-component';

@Component({
  selector: 'lib-simple-view',
  imports: [],
  templateUrl: './simple-view.html',
  styleUrl: './simple-view.css',
})
export class SimpleView<ItemType, Params> implements AfterViewInit {
  dataCall = input.required<DataCall<ItemType[], Params>>()
  simpleViewData = input.required<SimpleViewData<ItemType, Params>>()
  refresh = output();

  @ViewChild('dynamicComponent', {read: ViewContainerRef})
  dynamicContainer!: ViewContainerRef;

  private viewInitialized = signal(false);

  ngAfterViewInit() {
    this.viewInitialized.set(true);
  }

  componentRef = signal<ComponentRef<SimpleViewComponent<ItemType, Params>> | null>(null)

  constructor() {
    effect(() => {
      const viewInitialized = this.viewInitialized();
      const simpleViewData = this.simpleViewData();
      if (viewInitialized) {
        const dynamicContainer = this.dynamicContainer
        const dynamicComponent = simpleViewData.component;
        dynamicContainer.clear();
        const componentRef: ComponentRef<SimpleViewComponent<ItemType, Params>> = dynamicContainer.createComponent(dynamicComponent);
        this.componentRef.set(componentRef)
        componentRef.instance.refresh.subscribe(() => {
          this.refresh.emit()
        });
      }
    });
    effect(() => {
      const dataCall = this.dataCall();
      const componentRef = this.componentRef();
      if (componentRef != null) {
        componentRef.instance.dataCall.set(dataCall);
      }
    });
  }
}
