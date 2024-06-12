import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-countrt-page',
  standalone: true,
  imports: [],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountrtPageComponent implements OnInit{

  constructor(private apiService:ApiServiceService){}
  ngOnInit(): void {
    
    this.apiService.getCountry(localStorage.getItem("countryName") || "").subscribe(data=>{
      console.log(data)
    })
  }

}
