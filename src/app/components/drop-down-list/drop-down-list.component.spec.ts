import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownListComponent } from './drop-down-list.component';

describe('DropDownListComponent', () => {
  let component: DropDownListComponent;
  let fixture: ComponentFixture<DropDownListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownListComponent]
    });
    fixture = TestBed.createComponent(DropDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onChangeValue', () => {
    it('calls emit method', () => {
      // let element = new HTMLSelectElement();
      let event = new Event("");
      let spy = spyOn(component.changeEvent, "emit");
      Object.defineProperty(event, 'target', { writable: false, value: {} });
      component.onChangeValue(event);
      expect(spy).toHaveBeenCalled();
    });
  });
});
