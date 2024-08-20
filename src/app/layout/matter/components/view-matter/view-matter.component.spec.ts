import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatterComponent } from './view-matter.component';

describe('ViewMatterComponent', () => {
  let component: ViewMatterComponent;
  let fixture: ComponentFixture<ViewMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
