import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBaseRateComponent } from './add-edit-base-rate.component';

describe('AddEditBaseRateComponent', () => {
  let component: AddEditBaseRateComponent;
  let fixture: ComponentFixture<AddEditBaseRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBaseRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditBaseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
