import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: 'ejercicio/products',
    component: ListComponent
  },
  {
    path: 'ejercicio/formulario',
    component: FormComponent
  },
  { path: '', redirectTo: '/ejercicio/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
