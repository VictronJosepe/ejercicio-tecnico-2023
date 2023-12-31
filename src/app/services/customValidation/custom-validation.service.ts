import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { HttpRequestsService } from "../httpRequests/http-requests.service";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private http: HttpRequestsService) { }

  public notExistInServer(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.http.doesIdExist(control.value)
        .pipe(
          map((result: boolean) => {
            return result ? { idAlreadyExists: true } : null
          }
          )
        )
    }
  }

  public dateLaterThanCurrent(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let today = new Date();
      let dateSplit = control.value.split("-");

      return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()
        ? { dateIsNotLater: true }
        : null;
    }
  }

  public dateLaterByOneYear(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let releaseSplit = control.parent?.get('releaseDate')!.value.split("-");
      let dateSplit = control.value.split("-");

      if (!releaseSplit || !dateSplit) {
        return null;
      } else {
        return !(Number(releaseSplit[0]) + 1 === Number(dateSplit[0]) && Number(releaseSplit[1]) === Number(dateSplit[1]) && Number(releaseSplit[2]) === Number(dateSplit[2]))
          ? { dateIsNotLaterByYear: true }
          : null;
      }

    }
  }
}
