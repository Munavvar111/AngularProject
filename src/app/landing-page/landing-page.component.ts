import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { ApiServiceService } from '../api-service.service';
import { error } from 'console';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatCardModule } from '@angular/material/card';
import { Country, Currency } from '../model/country.model';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,MatError ,MatCardModule,MatFormFieldModule,MatButtonModule,MatInputModule ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  CountryList!:Country[];

  WetherForm:FormGroup ;
  constructor(private ApiService:ApiServiceService,private router:Router){
    this.WetherForm=new FormGroup({
      CountryName:new FormControl('',[Validators.required])
    })
  }
  Onsubmit() {
    if (this.WetherForm.valid) {
      console.log(this.WetherForm.value.CountryName)
      this.ApiService.setCountryName(this.WetherForm.value.CountryName)
      this.ApiService.getCountry(this.WetherForm.value.CountryName || "" ).subscribe({
        next:(data:Country[])=>{
          this.CountryList=data
           console.log(this.CountryList[0].latlng)
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
      // this.router.navigate(['/countrtList'])
    }
  }
  isControlInvalid(controlName:string){
    const control=this.WetherForm.get(controlName);
    return control ? control.invalid && control.touched:false;
  }
  getCurrencies(currenciesObj: { [key: string]: Currency } | null | undefined): Currency[] {
    // console.log(typeof(currenciesObj))

    if (currenciesObj != null) {
      return Object.keys(currenciesObj).map(key => currenciesObj[key]);
    } else {
      return [];
    }
  }
  
    
getCapitalWeather(latlng:object){
  console.log(typeof(latlng))
  this.router.navigate(['/weather',latlng[0],latlng[1]])
}
}
