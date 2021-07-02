import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    //Declarar os components que esse módulo será resposável pelo exports ou por manter privado
    CursosComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    CursosComponent
  ],
  //providers: [CursosService]
})
export class CursosModule { }
