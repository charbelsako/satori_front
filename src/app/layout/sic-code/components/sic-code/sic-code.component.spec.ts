import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SICCodeComponent } from './sic-code.component';

describe('SICCodesComponent', () => {
  let component: SICCodeComponent;
  let fixture: ComponentFixture<SICCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SICCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SICCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
