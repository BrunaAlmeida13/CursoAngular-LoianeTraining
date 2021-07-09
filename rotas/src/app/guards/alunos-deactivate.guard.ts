import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from "./iform-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    
  //declarando o component diretamente no método, pode-se ter acesso aos métodos desse component
    canDeactivate(
      component: IFormCanDeactivate,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

      console.log('Guarda de desativação')

      //no aluno-form.component.ts faz as verificações de se mudou o form, e faz verificação se o usuário deseja mudar a rota e perder os dados digitados
      return component.podeDesativar() ? component.podeDesativar() : true
  }
}
