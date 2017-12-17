// Основное предназначение сервиса - это хранение данных и передавать их различным компонентам
export class CarsService {
  cars = [
    {
      name: 'Ford', 
      isSold: false
    },
    {
      name: 'Mazda', 
      isSold: true
    },
    {
      name: 'Bently',
      isSold: false      
    }
  ];

  addCar(name: string) {
    this.cars.push({
      isSold: false,
      name // сокращенная запись от name: name
    });
  }
}