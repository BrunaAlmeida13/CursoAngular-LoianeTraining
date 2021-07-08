import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoNaoEcontradoComponent } from './curso-nao-econtrado/curso-nao-econtrado.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [
  //Deixando cursos em branco, pois já está especificado em app-routing, no lazy load
  { path: '', component: CursosComponent },
  { path: 'naoEncontrado', component: CursoNaoEcontradoComponent }, //tem que vir primeiro por conta do hard coded, (pra n ter conflito com o id)
  { path: ':id', component: CursoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)], //forChild - Rota de funcionalidade
  exports: [RouterModule]
})
export class CursosRoutingModule { }
