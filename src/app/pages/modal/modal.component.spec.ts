import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ButtonComponent } from 'src/app/components/button/button.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent, ButtonComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cancelDelete', () => {
    it('hides modal dialog', () => {
      component.cancelDelete();
      expect(component["dialogService"].showDialog).toBeFalse();
    });
  });

  describe('confirmDelete', () => {
     let myComponent: ModalComponent;

    beforeEach(() => {
      let dialogService = jasmine.createSpyObj("dialogService", [{}]);
      let http = jasmine.createSpyObj("http", {
        deleteProduct: {
          subscribe: (obj: any) => { 
            obj.error({message:"message"}); 
          }
        }
      });
      myComponent = new ModalComponent(http, dialogService);
    })

    it('should call console.error method', () => {
      let spy = spyOn(console, "error");
      myComponent.confirmDelete();
      expect(spy).toHaveBeenCalled();
    });

    it('calls console.error', () => {

    });
  });
});
