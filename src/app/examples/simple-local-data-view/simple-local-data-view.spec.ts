import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleLocalDataView} from './simple-local-data-view';

describe('SimpleLocalDataView', () => {
  let component: SimpleLocalDataView;
  let fixture: ComponentFixture<SimpleLocalDataView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleLocalDataView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleLocalDataView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
