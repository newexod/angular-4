import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  answers = [
    {
      type: 'Yes',
      text: 'Да'
    },
    {
      type: 'No',
      text: 'Нет'
    }
  ];

  submitForm(form: NgForm) {
    console.log('wow', form);
  }

  // до ввода в <input>
  // ng-untouched - означает, что данный <input> ещё не трогали и ничего в нём не вписывали
  // ng-pristine - означает, что сейчас данный <input> пустой
  // ng-invalid - означает, что данный <input> невалидный

  // после добавления символа в <input> 
  // ng-untouched
  // ng-invalid
  // ng-dirty

  // если убрать focus с <input>
  // ng-invalid
  // ng-dirty
  // ng-touched - означает, что убрали focus с данного <input> и при этом он до сих пор невалидный
  
}
