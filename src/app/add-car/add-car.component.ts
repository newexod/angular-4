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

  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameElement: HTMLInputElement) {
    console.log(this.carYearInput);

    this.carEmitter.emit({
      name: carNameElement.value,
      year: +this.carYearInput.nativeElement.value
    });

    carNameElement.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }

}
