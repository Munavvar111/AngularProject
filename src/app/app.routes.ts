import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CountrtPageComponent } from './country-page/country-page.component';

export const routes: Routes = [
    {path:"",component:LandingPageComponent},
    {path:"countrtList",component:CountrtPageComponent}

];
