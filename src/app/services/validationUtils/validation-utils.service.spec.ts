import { TestBed } from '@angular/core/testing';

import { ValidationUtilsService } from './validation-utils.service';

describe('ValidationUtilsService', () => {
  let service: ValidationUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMessage', () => {
    it('shows required message', () => {
      let control = jasmine.createSpyObj("control", [], {
        touched: true,
        valid: false,
        errors: { required: true }
      });

      expect(ValidationUtilsService.getMessage(control)).toEqual("Este campo es requerido!");
    });

    it('shows minlength message', () => {
      let control = jasmine.createSpyObj("control", [], {
        touched: true,
        valid: false,
        errors: { minlength: { requiredLength: 3 } }
      });

      expect(ValidationUtilsService.getMessage(control)).toEqual("Campo muy corto. Extensión mínima: 3!");
    });

    it('shows maxlength message', () => {
      let control = jasmine.createSpyObj("control", [], {
        touched: true,
        valid: false,
        errors: { maxlength: { requiredLength: 3 } }
      });

      expect(ValidationUtilsService.getMessage(control)).toEqual("Campo muy largo. Extensión máxima: 3!");
    });

    it('shows idAlreadyExists message', () => {
      let control = jasmine.createSpyObj("control", [], {
        touched: true,
        valid: false,
        errors: { idAlreadyExists: true }
      });

      expect(ValidationUtilsService.getMessage(control)).toEqual("El ID ya existe!");
    });

    it('shows dateIsNotLater message', () => {
      let control = jasmine.createSpyObj("control", [], {
        touched: true,
        valid: false,
        errors: { dateIsNotLater: true }
      });

      expect(ValidationUtilsService.getMessage(control)).toEqual("La fecha debe ser posterior a la actual!");
    });

    it('shows dateIsNotLaterByYear message', () => {
      let control = jasmine.createSpyObj("control", [], {
        touched: true,
        valid: false,
        errors: { dateIsNotLaterByYear: true }
      });

      expect(ValidationUtilsService.getMessage(control)).toEqual("La fecha debe exactamente 1 año posterior a la fecha de Liberación!");
    });

    it('shows pattern message', () => {
      let control = jasmine.createSpyObj("control", [], {
        touched: true,
        valid: false,
        errors: { pattern: true }
      });

      expect(ValidationUtilsService.getMessage(control)).toEqual("El logo debe ser una URL!");
    });
  });
});
