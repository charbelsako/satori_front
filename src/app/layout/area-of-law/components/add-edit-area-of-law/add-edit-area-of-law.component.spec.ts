import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAreaOfLawComponent } from './add-edit-area-of-law.component';

describe('AddEditAreaOfLawComponent', () => {
  let component: AddEditAreaOfLawComponent;
  let fixture: ComponentFixture<AddEditAreaOfLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAreaOfLawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAreaOfLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
