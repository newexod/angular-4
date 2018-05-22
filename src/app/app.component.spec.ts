import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => { // функция, которая выполняется перед каждым запуском функции it()
    TestBed.configureTestingModule({ // объявление нового тестового модуля, который регистрирует AppComponent
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent); // создание AppComponent 
    const app = fixture.debugElement.componentInstance; // получение сущности компонента
    expect(app).toBeTruthy(); // проверяем, что компонент должен существовать
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app'); // проверяем, что у объекта app должно быть поле title, эквивалентное 'app'
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!'); // Достаём в объекте компонента <h1> содержимое заголовка и ожидаем, что там будет 'Welcome to app!'
  }));
});
