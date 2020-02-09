import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { INomination } from './nomination/nomination';
import { ICategory } from './nomination/category';

@Injectable({
  providedIn: 'root'
})
export class NominationService {
  private nominationsUrl = 'data/nominations.json';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.nominationsUrl).pipe(
      tap(data => console.log('All categories ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Server returned code ${err.status}, error message ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
}
}
