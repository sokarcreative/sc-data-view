import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScDataView } from './sc-data-view';

describe('ScDataView', () => {
  let component: ScDataView;
  let fixture: ComponentFixture<ScDataView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScDataView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScDataView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
