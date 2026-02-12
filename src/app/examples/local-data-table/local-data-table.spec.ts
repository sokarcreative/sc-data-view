import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDataTable } from './local-data-table';

describe('LocalDataTable', () => {
  let component: LocalDataTable;
  let fixture: ComponentFixture<LocalDataTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalDataTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalDataTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
