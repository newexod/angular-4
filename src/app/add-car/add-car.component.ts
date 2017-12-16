import { 
  Component, 
  OnInit, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ElementRef 
} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();

  // 2 СПОСОБ
  @ViewChild('carYearInput') carYearInput: ElementRef; // обращаемся к референции 'carYearInput' и заносим её в переменную carYearInput, которая является типом ElementRef

  constructor() { }

  ngOnInit() {
  }

  // 1 СПОСОБ
  // addCar(carNameElement: HTMLInputElement) {
  //   console.dir(carNameElement.value); // <input _ngcontent-c2 class="form-control" type="text">

  //   this.carEmitter.emit({
  //     name: carNameElement.value,
  //     year: this.carYear
  //   });

  //   carNameElement.value = '';
  //   this.carYear = 2017;
  // }


  // 2 СПОСОБ
  addCar(carNameElement: HTMLInputElement) {
    console.log(this.carYearInput); // ElementRef - специальный ангуляр элемент у которого есть nativeElement, который является обычным html элементом (onclick, onfocus, value ...)

    this.carEmitter.emit({
      name: carNameElement.value,
      year: +this.carYearInput.nativeElement.value // + инкрементирует из строки в число
    });

    carNameElement.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }

}
