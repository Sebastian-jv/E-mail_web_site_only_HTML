import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMailComponent } from './area-mail.component';

describe('AreaMailComponent', () => {
  let component: AreaMailComponent;
  let fixture: ComponentFixture<AreaMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
