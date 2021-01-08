import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface Testi {
  name: string;
  designation: string;
  testimonial: string;
};
@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get('https://email-elitekuche.herokuapp.com/testimonials/');
  }
}
