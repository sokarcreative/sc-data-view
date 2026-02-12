import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSimpleView } from './default-simple-view';

describe('DefaultSimpleView', () => {
  let component: DefaultSimpleView;
  let fixture: ComponentFixture<DefaultSimpleView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSimpleView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSimpleView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
