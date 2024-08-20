import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSICCodeComponent } from './add-edit-sic-code.component';

describe('AddEditSICCodeComponent', () => {
  let component: AddEditSICCodeComponent;
  let fixture: ComponentFixture<AddEditSICCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSICCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSICCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
