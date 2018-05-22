import { TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';

describe('CarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
  });

  it('should create component instance', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should render h1 tag with title 'My car header'`, () => {
    const fixture = TestBed.createComponent(CarComponent);
    fixture.detectChanges(); // применить содержимое компонента в шаблон
    const component = fixture.debugElement.nativeElement;
    const text = component.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });
});