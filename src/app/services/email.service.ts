import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface Query {
  name: string;
  email: string;
  phone: number;
  message: string;
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  postQuery(data: Query): Observable<any>{
    // 127.0.0.1:8000/
    // https://email-elitekuche.herokuapp.com/queries/
    return this.httpClient.post<any>('https://email-elitekuche.herokuapp.com/queries/', data)
        .pipe(
        catchError(this.handleError)
        );

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }


  public postEmail(link: string)
{
  return this.httpClient.get(link, {observe: 'response'}).pipe(retry(3), catchError(this.handleError));
  console.log('Sent mail request to API');

}


}

