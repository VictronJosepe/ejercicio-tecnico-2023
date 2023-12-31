import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ExpandableMenuComponent } from './expandable-menu.component';

describe('ExpandableMenuComponent', () => {
  let component: ExpandableMenuComponent;
  let fixture: ComponentFixture<ExpandableMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandableMenuComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ExpandableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navigateEditProduct', () => {
    it('should call navigateByUrl method', () => {
      let spy = spyOn(component["router"], "navigateByUrl");
      component["navigateEditProduct"]();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('deleteProduct', () => {
    let myComponent: ExpandableMenuComponent;

    beforeEach(() => {
      let router = jasmine.createSpyObj("router", [{}]);
      let http = jasmine.createSpyObj("http", {
        deleteProduct: {
          subscribe: (obj: any) => { 
            obj.error({message:"message"}); 
          }
        }
      });
      myComponent = new ExpandableMenuComponent(router, http);
    })

    it('should call console.error method', () => {
      spyOn(window, "confirm").and.returnValue(true);
      let spy = spyOn(console, "error");
      myComponent["deleteProduct"]("id", "name");
      expect(spy).toHaveBeenCalled();
    });
  });
});
