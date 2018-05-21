import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsPageComponent } from './cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';

const carsRouters: Routes = [
  { path: 'cars', component: CarsPageComponent, children: [
    { path: ':id/:name', component: CarPageComponent },
  ] }
];

@NgModule({
    imports: [
      RouterModule.forChild(carsRouters)
    ],
    exports: [
      RouterModule
    ]
})
export class CarsRoutingModule {}