import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { HttpRequestsService } from './http-requests.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/IProduct'

describe('HttpRequestsService', () => {
  let service: HttpRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('doesIdExist', () => {
    it('calls get method', () => {
      expect(service.doesIdExist("id")).toBeInstanceOf(Observable<boolean>);
    });
  });

  describe('createProduct', () => {
    it('calls post method', () => {
      let spy = jasmine.createSpyObj("product", [{}])
      expect(service.createProduct(spy)).toBeInstanceOf(Observable<IProduct>);
    });
  });
  
  describe('updateProduct', () => {
    it('calls put method', () => {
      let spy = jasmine.createSpyObj("product", [{}])
      expect(service.updateProduct(spy)).toBeInstanceOf(Observable<IProduct>);
    });
  });

  describe('deleteProduct', () => {
    it('calls delete method', () => {
      expect(service.deleteProduct("id")).toBeInstanceOf(Observable<any>);
    });
  });
});
