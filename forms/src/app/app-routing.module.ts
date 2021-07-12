import { DataFormComponent } from './data-form/data-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';

//arout -> a-rout-path-eager
const routes: Routes = [
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'dataForm', component: DataFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'templateForm' } //pedindo para redirecionar |             a-rout-path-default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
