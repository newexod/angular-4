import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

  charsCount = 4;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)])
      }),
      country: new FormControl('ru'),
      answer: new FormControl('No')
    });
  }

  onSubmit() {
    console.log('wow', this.form);
  }

  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
      return {
        'lengthError': true
      };
    }

    return null;
  }

  // Асинхронный валидатор
  // К примеру, заполняем поле email
  // Нужно спросить сервер: "Есть ли пользователь с таким email?"
  // Если пользователь с таким email имеется нужно уведомить пользователя о том, что такой email занят. Нужно использовать другой email
  // Асинхронный валидатор будет ходить на сервер, спрашивать сервер есть ли такой email в базе данных и возвращать ответ в асинхронном режиме
  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
}
