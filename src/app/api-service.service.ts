import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  CountryName:string;
  private apiKey = '85d36d6aacf6a821c3552d813ab26451'; // Replace with your actual API key
  // 7d8a814c0980cee604caf0d079c10a6f
  // 456505a9d3924ff286e99ef678d0071b
  // 7431710de19e5616a3eb31f9b69b35a4
  // 7aae0d0b8034def58abb3a31f6e317b0
  constructor(private http:HttpClient) {   }

  getCountry(countryName:string):Observable<any>{
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    return this.http.get(url)
  }

  getWeatherByCapital(latitude:string,longitude:string):Observable<any>{
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`
    return this.http.get(weatherUrl);
  }
  setCountryName(countryName:string){
    this.CountryName=countryName;
  }
  getCountryName(){
    return this.CountryName;
  }
}
