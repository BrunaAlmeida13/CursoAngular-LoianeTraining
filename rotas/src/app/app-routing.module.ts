import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
//import { CursoNaoEcontradoComponent } from './cursos/curso-nao-econtrado/curso-nao-econtrado.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

const appRoutes: Routes = [
  /*Fazendo configuração do carregamento sob demanda*/
  { path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule), 
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard] },
    
  { path: 'alunos', 
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule), 
    canActivate: [AuthGuard],
    /*canActivateChild: [AlunosGuard]*/ //comentando para testar o deactivate
    canLoad: [AuthGuard]}, 
  { path: 'login', component: LoginComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEcontradoComponent },
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'cursos/:id', component: CursoDetalheComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  }, //homePage
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent } 
  //qualquer coisa digitada irá parar nesse caminho | canActivate: [AuthGuard]
] //coloca caminhos vazios e páginas não encontradas por último
/*
path - Qual o caminho para determinado component
HomeComponent - Quando se acessar o caminho sem uma hash, faz-se com que o Angular 2 renderize um component
*/

//Essa variável é a que contém a definição e a configuração das rotas no projeto
//.forRoot contém todas as rotas raíz/chave/principal da aplicação
/*
RouterModule - Representa um módulo de rotas
Pra se declarar rotas de funcionalidade, exemplo, se tiver o cursos e quiser tratar isso como funcionalidade, e no cursos pode ter um cursos/id, cursos/editar, pra não poluir esse arquivo app-routing, da mesma forma que se faz com módulos, pode fazer com rotas
E a única diferença entre rota raíz e de funcionalidade é a chamada do forRoot ou do forChild
E como é necessário configurar a rota no módulo, põe-se o exportar
*/
/*export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES)*/

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {useHash: true} para colocar um # antes das rotas, para auxiliar as linguagens backend