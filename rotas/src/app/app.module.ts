import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosModule } from './cursos/cursos.module'; //modularizando a aplicação, fica um import no lugar de quatro, por exemplo
import { AppRoutingModule } from './app-routing.module';
//import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //CursosModule, - Usando o lazy load não pode haver imports do módulo na aplicação
    //AlunosModule, - Usando o lazy load não pode haver imports do módulo na aplicação
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ]
})
export class AppModule { }
