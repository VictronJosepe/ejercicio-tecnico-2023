import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { ExpandableMenuComponent } from './expandable-menu.component';

describe('ExpandableMenuComponent', () => {
  let component: ExpandableMenuComponent;
  let fixture: ComponentFixture<ExpandableMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandableMenuComponent]
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
    it('shows modal dialog', () => {
      component["deleteProduct"]("id", "name");
      expect(component["dialogService"].showDialog).toBeTrue();
    });
  });
});
