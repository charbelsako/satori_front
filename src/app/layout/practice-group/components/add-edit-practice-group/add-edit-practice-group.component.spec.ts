import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPracticeGroupComponent } from './add-edit-practice-group.component';

describe('AddEditPracticeGroupComponent', () => {
  let component: AddEditPracticeGroupComponent;
  let fixture: ComponentFixture<AddEditPracticeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPracticeGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPracticeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
