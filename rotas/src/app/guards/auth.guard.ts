import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
//O que faz de fato ser um guardador de rotas, é implementar a CanActivate, que faz a classe poder ativar
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router //pra fazer a rota imperativa
    ) { }
  
  /*
    Através dessa variável (ActivatedRouteSnapshot) que é passada pra esse método (route) se tem as informações dessa rota
    Esses params <boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>> é o tipo de retorno que esse método (canActivate) pode ter
  */
  canActivate(
    //Recebe a rota e o estado da rota
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | boolean { //retorno observable com boo ou boolean
    
    console.log('AuthGuard')
    return this.verificarAcesso()
  }

  //A lógica é a mesma do CanActivate. Será verificado se o usuário está autenticado, e se sim, return true, se não, return false e a mensagem de que o usuário não pode carregar o arquivo JS se ele não estiver logado
  
  private verificarAcesso() {
    if(this.authService.usuarioEstaAutenticado()) {
      return true //se o usuário puder usar a rota (se está autenticado)
    } 

    //Se não tiver autenticado, vai ser redirecionado para a página de login
    this.router.navigate(['/login'])

    return false
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('CanLoad: verificando se o usuário pode carregar o código do módulo')
    return this.verificarAcesso()
  }
}
/*
  O nome sinifica Guarda de autenticação, pra verificar se o usuário está logado ou não, e para seguir um padrão de nome, já que esse não é um service e sim um guard
*/