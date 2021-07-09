import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Aluno } from "../aluno";
import { AlunosService } from "../alunos.service";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    
    constructor(private alunosService: AlunosService) {}
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

        console.log('AlunoDetalheResolver')

        //pegando o id da rota e passando pro service
        let id = route.params['id']

        //carregando alunos do service alunos
        return this.alunosService.getAluno(id);
    }
}