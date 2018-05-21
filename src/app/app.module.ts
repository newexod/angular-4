import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { CarsService } from './cars.service';

import { AppRoutingModule } from './app-routing.module';
import { CarPageComponent } from './car-page/car-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent,
    CarPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
