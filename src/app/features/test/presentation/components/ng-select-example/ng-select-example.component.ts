import { Component, OnInit } from '@angular/core';
import { Car } from '../../../domain/entities/car.model';

@Component({
  selector: 'app-ng-select-example',
  templateUrl: './ng-select-example.component.html',
  styleUrls: ['./ng-select-example.component.scss']
})
export class NgSelectExampleComponent implements OnInit {
  selectedCar?: number;
  cars: Car[];

  constructor() {
    this.cars = [
      {
        id: 1, 
        name: 'Volvo',
      },
      {
        id: 2,
        name: 'Saab',
      },
      {
        id: 3,
        name: 'Opel',
      },
      {
        id: 4,
        name: 'Audi',
      },
    ]
  }

  ngOnInit(): void {
  }

}
