import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
//O que faz de fato ser um guardador de rotas, é implementar a CanActivate, que faz a classe poder ativar
export class AuthGuard implements CanActivate{

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
    if(this.authService.usuarioEstaAutenticado()) {
      return true //se o usuário puder usar a rota (se está autenticado)
    } 

    //Se não tiver autenticado, vai ser redirecionado para a página de login
    this.router.navigate(['/login'])

    return false
  }
}
/*
  O nome sinifica Guarda de autenticação, pra verificar se o usuário está logado ou não, e para seguir um padrão de nome, já que esse não é um service e sim um guard
*/