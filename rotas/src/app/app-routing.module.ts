import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent } //homePage
];

//Essa variável é a que contém a definição e a configuração das rotas no projeto
//.forRoot contém todas as rotas raíz/chave/principal da aplicação
/*
RouterModule - Representa um módulo de rotas
Pra se declarar rotas de funcionalidade, exemplo, se tiver o cursos e quiser tratar isso como funcionalidade, e no cursos pode ter um cursos/id, cursos/editar, pra não poluir esse arquivo app-routing, da mesma forma que se faz com módulos, pode fazer com rotas
E a única diferença entre rota raíz e de funcionalidade é a chamada do forRoot ou do forChild
E como é necessário configurar a rota no módulo, põe-se o exportar
*/
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES)

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
path - Qual o caminho para determinado component
HomeComponent - Quando se acessar o caminho sem uma hash, faz-se com que o Angular 2 renderize um component
*/