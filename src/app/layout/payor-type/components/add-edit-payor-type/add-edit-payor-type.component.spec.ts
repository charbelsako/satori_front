import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPayorTypeComponent } from './add-edit-payor-type.component';

describe('AddEditPayorTypeComponent', () => {
  let component: AddEditPayorTypeComponent;
  let fixture: ComponentFixture<AddEditPayorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPayorTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPayorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
