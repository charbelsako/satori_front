import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOfLawComponent } from './area-of-law.component';

describe('AreaOfLawComponent', () => {
  let component: AreaOfLawComponent;
  let fixture: ComponentFixture<AreaOfLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaOfLawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaOfLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
