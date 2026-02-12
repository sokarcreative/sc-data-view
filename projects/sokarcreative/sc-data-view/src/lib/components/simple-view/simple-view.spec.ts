import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleView} from './simple-view';

describe('SimpleView', () => {
  let component: SimpleView;
  let fixture: ComponentFixture<SimpleView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
