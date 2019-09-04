import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CarsComponent implements OnInit {

  cars: { name: string, year: number }[] = [{
    name: 'Ford',
    year: 2015
  }, {
    name: 'Mazda',
    year: 2010
  }, {
    name: 'Audi',
    year: 2017
  }];

  constructor() {
  }

  ngOnInit() {
  }

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }
}
