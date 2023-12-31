import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ListComponent } from './list.component';
import { RoundedInputComponent } from 'src/app/components/rounded-input/rounded-input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { DropDownListComponent } from 'src/app/components/drop-down-list/drop-down-list.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, RoundedInputComponent, ButtonComponent, DropDownListComponent, GridComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navigateCreateProduct', () => {
    it('calls navigateByUrl method', () => {
      let spy = spyOn(component["router"], "navigateByUrl");
      component["navigateCreateProduct"]();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onChanges', () => {
    it('calls navigateByUrl method', () => {
      let spy1 = spyOn(component["gridComponent"], "searchByBox");
      let spy2 = spyOn(component["searchForm"], "get").and.returnValue(<any>{
        valueChanges: {
          subscribe: (fn: any) => { fn(""); }
        }
      });
      component["onChanges"]();
      expect(spy1).toHaveBeenCalled();
    });
  });
});
