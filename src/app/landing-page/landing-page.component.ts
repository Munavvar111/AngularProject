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
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,MatError,MatOption,MatInputModule,MatButtonModule ,MatFormFieldModule,MatSelectModule,MatDatepickerModule ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  countryList:[] | undefined;
  subscription: Subscription | undefined;

  WetherForm:FormGroup ;
  constructor(private ApiService:ApiServiceService,private router:Router){
    this.WetherForm=new FormGroup({
      CountryName:new FormControl('',[Validators.required])
    })
  }
  Onsubmit() {
    if (this.WetherForm.valid) {
      console.log(this.WetherForm.value.CountryName)
      this.ApiService.getCountry(this.WetherForm.value.CountryName).subscribe({
        next:(data:[])=>{
          console.log(data)
          localStorage.setItem("countryName",this.WetherForm.value.CountryName);
          this.router.navigate(['/countrtList']);
        },
        error: err=>{
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
        }
      })
     
    }
  }
  isControlInvalid(controlName:string){
    const control=this.WetherForm.get(controlName);
    return control ? control.invalid && control.touched:false;
  }
}
