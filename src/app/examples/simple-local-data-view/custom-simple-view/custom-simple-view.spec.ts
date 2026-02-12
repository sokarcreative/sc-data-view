import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSimpleView } from './custom-simple-view';

describe('CustomSimpleView', () => {
  let component: CustomSimpleView;
  let fixture: ComponentFixture<CustomSimpleView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSimpleView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSimpleView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
