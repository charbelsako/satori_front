import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardDetailsComponent } from './timecard-details.component';

describe('TimecardDetailsComponent', () => {
  let component: TimecardDetailsComponent;
  let fixture: ComponentFixture<TimecardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
