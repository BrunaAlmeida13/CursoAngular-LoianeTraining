import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class CursosGuard implements CanActivateChild{
   
    //digita 'ang' e escolhe o simple
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>| boolean {
        console.log('Guarda de rota filha em CursosGuard')
        return true
    }

}