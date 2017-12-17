// Использование пайпа для фильтрации данных
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchString: string, fieldName: string) {
    if (carList.length === 0 || searchString === '') {
      return carList;
    }

    /*
      Обращаемся к массиву carList
      С помощью filter пробегаемся по каждому из элементов массива
      Смотрим на поле name. Если поле name совпадает с поисковой строкой searchString
      То в таком случае возвращаем определённый массив
    */

    return carList.filter((car) => car[fieldName].toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

}
