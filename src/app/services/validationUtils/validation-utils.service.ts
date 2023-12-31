import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationUtilsService {

  constructor() { }

  public static isInvalid(control: FormControl): boolean {
    return (control.touched || control.dirty) && !control.valid;
  }

  public static getMessage(control: FormControl) {
    let message = "";
    if (ValidationUtilsService.isInvalid(control) && control.errors) {
      switch (Object.keys(control.errors).pop()) {
        case 'required':
          message = "Este campo es requerido!"
          break;
        case 'minlength':
          message = "Campo muy corto. Extensión mínima: " + control.errors!['minlength'].requiredLength + "!";
          break;
        case 'maxlength':
          message = "Campo muy largo. Extensión máxima: " + control.errors!['maxlength'].requiredLength + "!";
          break;
        case 'idAlreadyExists':
          message = "El ID ya existe!";
          break;
        case 'dateIsNotLater':
          message = "La fecha debe ser posterior a la actual!";
          break;
        case 'dateIsNotLaterByYear':
          message = "La fecha debe exactamente 1 año posterior a la fecha de Liberación!";
          break;
      }
    }
    return message;
  }

  public static checkFormValidity(){

  }
}
