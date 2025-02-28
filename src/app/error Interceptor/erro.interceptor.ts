import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CurstomerService } from '../services/curstomer.service';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
  const custService = inject(CurstomerService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        const isContinue = confirm('Are you sure want to Continue');
        if (isContinue) {
          custService.tokenExperied$.next(true);
        }
      }
      return throwError(error);
    })
  );
};
