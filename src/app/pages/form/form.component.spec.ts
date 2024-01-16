import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { RoundedInputComponent } from 'src/app/components/rounded-input/rounded-input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, RoundedInputComponent, ButtonComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],

    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('calls onChanges Event', () => {
      sessionStorage.clear();
      let spy = spyOn<any>(component, "onChanges");
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    it('calls onChanges Event', () => {
      sessionStorage.setItem("productInfo", '{"date_release":"2000-1-1","date_revision":"2000-1-1","description":"","id":"","logo":"","name":""}');
      let spy = spyOn<any>(component, "onChanges");
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    it('catches error', () => {
      sessionStorage.setItem("productInfo", 'undefined');
      let spy = spyOn<any>(console, "error");
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('saveChanges', () => {
    it('calls createProduct method: next', () => {
      let spy = spyOn(component["http"], "createProduct").and.returnValue({ subscribe: (obj: any) => { obj.next("message") } } as any);
      spyOn(component["router"], "navigateByUrl");
      component["isNewRegistry"] = true;
      component["saveChanges"]();
      expect(spy).toHaveBeenCalled();
    });

    it('calls createProduct method: error', () => {
      let spy = spyOn(component["http"], "createProduct").and.returnValue({ subscribe: (obj: any) => { obj.error("message") } } as any);
      spyOn(console, "error");
      component["isNewRegistry"] = true;
      component["saveChanges"]();
      expect(spy).toHaveBeenCalled();
    });

    it('calls updateProduct method: next', () => {
      let spy = spyOn(component["http"], "updateProduct").and.returnValue({ subscribe: (obj: any) => { obj.next("message") } } as any);
      spyOn(component["router"], "navigateByUrl");
      component["isNewRegistry"] = false;
      component["saveChanges"]();
      expect(spy).toHaveBeenCalled();
    });

    it('calls updateProduct method: error', () => {
      let spy = spyOn(component["http"], "updateProduct").and.returnValue({ subscribe: (obj: any) => { obj.error("message") } } as any);
      spyOn(console, "error");
      component["isNewRegistry"] = false;
      component["saveChanges"]();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('cancelChanges', () => {
    it('calls navigateByUrl method', () => {
      let spy = spyOn(component["router"], "navigateByUrl");
      component["cancelChanges"]();
      expect(spy).toHaveBeenCalled();
    });
  });
});
