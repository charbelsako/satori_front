import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBillingMethodComponent } from './add-edit-billing-method.component';

describe('AddEditBillingMethodComponent', () => {
  let component: AddEditBillingMethodComponent;
  let fixture: ComponentFixture<AddEditBillingMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBillingMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditBillingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
