import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsProgressComponent } from './buttons-progress.component';

describe('ButtonsProgressComponent', () => {
  let component: ButtonsProgressComponent;
  let fixture: ComponentFixture<ButtonsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
