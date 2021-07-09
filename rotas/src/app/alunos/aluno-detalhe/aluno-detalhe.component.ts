import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno!: Aluno;
  inscricao: Subscription = new Subscription()

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    //Não precisa mais pegar o id da rota, pra depois carregar o aluno em service
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id= params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    ) */ 

      console.log('ngOnInit: AlunoDetalheComponent')

    //Devido ao resolver, pode pegar o aluno direto
    /*Também será pego a rota, só que no lugar de acessar os parâmetros, pega-se o atributo data que são os dados fornecidos | E como o resolver retorna um observable/promisses, pode-se fazer um subscribe*/
    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log('Recebendo o obj Aluno do resolver')
        this.aluno = info.aluno
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  editarContato() {
    //navegação imperativa | através do código
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }
}
/*
Para pegar o parâmetro do aluno, para identificá-lo
- Precisa-se do Activate Router
- E de se inscrever nos parâmetros da rota
*/