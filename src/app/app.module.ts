import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './cars-page/car-page/car-page.component';
import { HeaderComponent } from './header/header.component';

import { CarsService } from './cars.service';

import { AppRoutingModule } from './app-routing.module';

import { ColorDirective } from './shared/color.directive';


@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent,
    CarPageComponent,
    HeaderComponent,
    ColorDirective
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
