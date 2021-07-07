import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router'; - Já está sendo importado em cursos.routing.module.ts

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEcontradoComponent } from './curso-nao-econtrado/curso-nao-econtrado.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEcontradoComponent
  ],
  imports: [
    CommonModule,
    //RouterModule
    CursosRoutingModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
