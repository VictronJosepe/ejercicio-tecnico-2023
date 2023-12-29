import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedInputComponent } from './rounded-input.component';

describe('RoundedInputComponent', () => {
  let component: RoundedInputComponent;
  let fixture: ComponentFixture<RoundedInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundedInputComponent]
    });
    fixture = TestBed.createComponent(RoundedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
