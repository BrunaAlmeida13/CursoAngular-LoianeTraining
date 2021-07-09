import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AlunosGuard implements CanActivateChild{
   
    //digita 'ang' e escolhe o simple
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>| boolean {
        
        console.log('Guarda de rota filha de AlunosGuard')

        //verificando o tipo de informação que o objeto passa pra ver o que pode ser utilizado
        //console.log(route) 
        //console.log(state) 

        //Como a url é string, usa-se o includes() pra fazer a verificação
        //Se tem o editar, retorne falso, e não deixe o usuário editar
        if(state.url.includes('editar')) {
            //Comentando para testar o deactivate
            //alert('Usuário sem permissão para edição')
            //return observable.of(false)
        }

        return true
    }
}