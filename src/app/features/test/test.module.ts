import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './presentation/pages/test/test.component';
import { NgSelectExampleComponent } from './presentation/components/ng-select-example/ng-select-example.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectDialogDialog } from './presentation/components/ng-select-dialog/ng-select-dialog.dialog';

@NgModule({
  declarations: [
    TestComponent,
    NgSelectExampleComponent,
    NgSelectDialogDialog,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,

    // TODO: angular 14 standalone component for NgSelectExampleComponent.
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class TestModule { }
