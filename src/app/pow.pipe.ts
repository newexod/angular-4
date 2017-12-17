// ng g p pow
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPow' // название пайпа
})

export class PowPipe implements PipeTransform {
  /*
    transform ОБЯЗАТЕЛЬНО ПИСАТЬ!
    value отвечает за то что приходит в данный пайп. Например num | number. num приходит в качестве значения и попадает в value 
  */
  transform(value: any, powNumber: number = 1, symb: string) {
    if (symb) {
      return symb + Math.pow(value, powNumber);
    }

    return Math.pow(value, powNumber);
  }

}