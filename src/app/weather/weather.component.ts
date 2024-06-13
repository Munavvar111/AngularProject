import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import Swal from 'sweetalert2';
import { WeatherData } from '../model/country.model';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatCard,MatCardModule,CommonModule,RouterOutlet,HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  capital: string ;
  longituide: string ;
  weatherData: WeatherData;

  constructor(private route: ActivatedRoute, private http: HttpClient,private apiService:ApiServiceService,private router:Router) {}

  ngOnInit(): void {
    this.capital = this.route.snapshot.paramMap.get('latitude');
    this.longituide = this.route.snapshot.paramMap.get('longitude');

    console.log(this.capital)
    this.getCapitalWeather();
    // console.log(this.weatherData)
  }

  getCapitalWeather() {
    this.apiService.getWeatherByCapital(this.capital,this.longituide).subscribe({
      next:(data:WeatherData)=>{
        console.log(data)
        this.weatherData=data;
      },
      error:err=>{
        Swal.fire({
          title: "No Found",
          text: 'No Weather Found',
          icon: 'error',
          iconColor: '#1ea6d3',
          buttonsStyling: false,
          customClass: {
              confirmButton: 'btn btn-primary px-4',
          },
        });
        this.router.navigate(['/countrtList']);
      }
    })
  }
}
