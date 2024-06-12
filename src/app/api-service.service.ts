import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  CountryName:string |null=null;
  private apiKey = '7aae0d0b8034def58abb3a31f6e317b0'; // Replace with your actual API key
  constructor(private http:HttpClient) {   }

  getCountry(countryName:string):Observable<any>{
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    return this.http.get(url)
  }

  getWeatherByCapital(capital:string):Observable<any>{
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${capital}`
    return this.http.get(weatherUrl);
  }
  setCountryName(countryName:string){
    this.CountryName=countryName;
  }
  getCountryName(){
    return this.CountryName;
  }
}
