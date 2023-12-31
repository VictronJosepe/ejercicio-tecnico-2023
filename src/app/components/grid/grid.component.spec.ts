import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { GridComponent } from './grid.component';
import { DropDownListComponent } from 'src/app/components/drop-down-list/drop-down-list.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent, DropDownListComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateProductListQuantity', () => {
    it('sets date  correctly', () => {
      component["productListServer"] = [{
        date_release: "", date_revision: "", description: "", id: "", logo: "", name: ""
      }];
      component["updateProductListQuantity"](0)
      expect(component["productListSliced"]).toBeDefined();
    });
  });

  describe('formatDate', () => {
    it('sets date  correctly', () => {
      component["productListSliced"] = [{
        date_release: "", date_revision: "", description: "", id: "", logo: "", name: ""
      }];
      expect(component["formatDate"]("date_release", 0)).toBeDefined();
    });
  });

  describe('searchByBox', () => {
    it('sets productListSliced  correctly', () => {
      let array = [{
        date_release: "", date_revision: "", description: "", id: "", logo: "", name: "a"
      }];
      component["productListServer"] = array;
      component.searchByBox("a")
      expect(component["productListSliced"]).toEqual(array);
    });
  });
});
