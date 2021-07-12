import { FormsModule } from '@angular/forms';
import { DiretivaNgclassComponent } from './../../../../diretivas/src/app/diretiva-ngclass/diretiva-ngclass.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';



@NgModule({
  declarations: [TemplateFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateFormModule { }
