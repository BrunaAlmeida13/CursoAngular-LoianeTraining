import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoNaoEcontradoComponent } from './curso-nao-econtrado/curso-nao-econtrado.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent },
  { path: 'naoEncontrado', component: CursoNaoEcontradoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)], //forChild - Rota de funcionalidade
  exports: [RouterModule]
})
export class CursosRoutingModule { }
