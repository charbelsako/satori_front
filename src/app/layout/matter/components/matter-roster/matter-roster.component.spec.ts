import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterRosterComponent } from './matter-roster.component';

describe('MatterRosterComponent', () => {
  let component: MatterRosterComponent;
  let fixture: ComponentFixture<MatterRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatterRosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatterRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
