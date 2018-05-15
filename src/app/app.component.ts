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

  defaultAnswer = 'No';
  defaultCountry = 'ru';

  submitForm(form: NgForm) {
    console.log('wow', form);
  }

}
