import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';


// Модуль === NgModule - это сущность, которая объединяет в себе все другие сущности
@NgModule({
  declarations: [ // может хранить пайпы, компоненты, директивы
    AppComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [ // то, что модуль должен в себя импортировать, те модули, которые ему нужны для работы  
    BrowserModule, // модуль, который предоставляет фичи, которые работают в браузере
    FormsModule,
    AppRoutingModule,
    SharedModule    
  ],
  providers: [], // массив, где регистрируем сервисы
  bootstrap: [AppComponent] // то, что необходимо запустить при старте приложения
})
export class AppModule { }