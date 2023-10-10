import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './presentation/pages/test/test.component';
import { NgSelectExampleComponent } from './presentation/components/ng-select-example/ng-select-example.component';


@NgModule({
  declarations: [
    TestComponent,
    NgSelectExampleComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,

    // TODO: angular 14 standalone component for NgSelectExampleComponent.
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestModule { }
