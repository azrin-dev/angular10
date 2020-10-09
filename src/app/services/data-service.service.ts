import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   dataFile='assets/json/chart.json';

  constructor(
     private http: HttpClient
  ) { }

  

  getData(){
      return this.http.get('/api/stat').pipe(
         catchError(error => {
            return throwError(error)
         })
      )
   }

}
