import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeGroupComponent } from './practice-group.component';

describe('PracticeGroupComponent', () => {
  let component: PracticeGroupComponent;
  let fixture: ComponentFixture<PracticeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
