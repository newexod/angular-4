import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cars', loadChildren: './cars-page/cars.module#CarsModule' } // Если был переход на роут CarsPageComponent, то загрузить CarsModule
  // Если необходимо загружать Guard с ленивой загрузкой, то используется canLoad: [] вместо canActivate: []
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}