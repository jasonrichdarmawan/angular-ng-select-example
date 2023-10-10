import { Component, OnInit } from '@angular/core';
import { Car } from '../../../domain/entities/car.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-select-example',
  templateUrl: './ng-select-example.component.html',
  styleUrls: ['./ng-select-example.component.scss']
})
export class NgSelectExampleComponent implements OnInit {
  selectedCar?: number;
  cars: Car[];
  form: FormGroup;

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
    this.form = new FormGroup({
      selectedCar: new FormControl(undefined, [
        Validators.required,
      ])
    })
  }

  ngOnInit(): void {
  }

  get selectedCarForm() { return this.form.get('selectedCar') as FormControl }

  setSelectedCar(e: number) {
    this.form.patchValue({
      selectedCar: e
    });
  }
}
