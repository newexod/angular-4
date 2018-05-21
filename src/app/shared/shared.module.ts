// Общий модуль, который будет загружать общие сущности (например пайпы или директивы). В данном случае директиву, которая будет использоваться во всех модулях
import { NgModule } from '@angular/core';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [ColorDirective],
  exports: [ColorDirective]
})
export class SharedModule {}