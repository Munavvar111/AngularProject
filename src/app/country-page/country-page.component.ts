import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countrt-page',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountrtPageComponent implements OnInit{
  CountryList:any=[];
  countryName: string | null=null;

  constructor(private apiService:ApiServiceService,private router:Router){}
  ngOnInit(): void {
    this.countryName = this.apiService.getCountryName();
    this.apiService.getCountry(this.countryName || "" ).subscribe({
      next:(data:[])=>{
        this.CountryList=data
        console.log(this.CountryList)
      },
      error:err=>{
        console.log(err)
        Swal.fire({
                 title: "No Found",
                 text: 'No Country Found',
                 icon: 'error',
                 iconColor: '#1ea6d3',
                 buttonsStyling: false,
                 customClass: {
                     confirmButton: 'btn btn-primary px-4',
                 },
                 });  
                 this.router.navigate(['']);
                }
    })
  }
  getCurrencies(currenciesObj: any) {
    return Object.keys(currenciesObj).map(key => currenciesObj[key]);
}
getCapitalWeather(capital:string){
  this.router.navigate(['/weather',capital])
}
}
