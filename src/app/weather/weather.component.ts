import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatCard,MatCardModule,CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  capital: string | null=null;
  weatherData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient,private apiService:ApiServiceService,private router:Router) {}

  ngOnInit(): void {
    this.capital = this.route.snapshot.paramMap.get('capital');
    this.getCapitalWeather();
  }

  getCapitalWeather() {
    // const apiKey = '7aae0d0b8034def58abb3a31f6e317b0'; // Replace with your actual API key
    // const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${this.capital}`;
    // this.http.get(weatherUrl).subscribe(data => {
    //   console.log(data)
    //   this.weatherData = data;
    // });
    this.apiService.getWeatherByCapital(this.capital || "").subscribe({
      next:(data:[])=>{
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
