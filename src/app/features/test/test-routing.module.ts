import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './presentation/pages/test/test.component';

const routes: Routes = [
  {
    path: '',
    // TODO: angular 14 standalone component for TestComponent.
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
