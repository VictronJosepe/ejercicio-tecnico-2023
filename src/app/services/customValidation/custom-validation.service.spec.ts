import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CustomValidationService } from './custom-validation.service';
import { Observable, first, of } from 'rxjs';

describe('CustomValidationService', () => {
  let service: CustomValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('notExistInServer', () => {
    it('executes Observable when true', () => {
      let spy = spyOn(service["http"], "doesIdExist").and.returnValue(of(true));
      let controlSpy = jasmine.createSpyObj("control", [{}]);
      let fn = service.notExistInServer();

      let result: Observable<boolean> = <any>fn(controlSpy);
      result.subscribe({ next: () => { } });

      expect(spy).toHaveBeenCalled();
    });

    it('executes Observable when false', () => {
      let spy = spyOn(service["http"], "doesIdExist").and.returnValue(of(false));
      let controlSpy = jasmine.createSpyObj("control", [{}]);
      let fn = service.notExistInServer();

      let result: Observable<boolean> = <any>fn(controlSpy);
      result.subscribe({ next: () => { } });

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('dateLaterByOneYear', () => {
    it('returns null without checking errors', () => {
      let fn = service.dateLaterByOneYear();
      let controlSpy = jasmine.createSpyObj("control", {}, {
        parent: {
          get: (text1: string) => {
            return {
              value: { split: (text: string) => { return true; } }
            }
          }
        },
        value: { split: (text: string) => { return false; } }
      });
      expect(fn(controlSpy)).toBeNull();
    });

    it('returns null by checking errors', () => {
      let fn = service.dateLaterByOneYear();
      let controlSpy = jasmine.createSpyObj("control", {}, {
        parent: {
          get: (text1: string) => {
            return {
              value: { split: (text: string) => { return [0, 0, 0]; } }
            }
          }
        },
        value: { split: (text: string) => { return [1, 0, 0]; } }
      });
      expect(fn(controlSpy)).toBeNull();
    });

    it('returns error object', () => {
      let fn = service.dateLaterByOneYear();
      let controlSpy = jasmine.createSpyObj("control", {}, {
        parent: {
          get: (text1: string) => {
            return {
              value: { split: (text: string) => { return [1, 1, 1]; } }
            }
          }
        },
        value: { split: (text: string) => { return [0, 0, 0]; } }
      });
      expect(fn(controlSpy)).toEqual({ dateIsNotLaterByYear: true });
    });
  });
});
