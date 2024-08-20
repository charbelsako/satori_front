import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAttachmentTypeComponent } from './add-edit-attachment-type.component';

describe('AddEditAttachmentTypeComponent', () => {
  let component: AddEditAttachmentTypeComponent;
  let fixture: ComponentFixture<AddEditAttachmentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAttachmentTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAttachmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
