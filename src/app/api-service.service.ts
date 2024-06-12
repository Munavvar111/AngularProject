import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  
  constructor(private http:HttpClient) {   }

  getCountry(countryName:string):Observable<any>{
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    return this.http.get(url)
  }

}
