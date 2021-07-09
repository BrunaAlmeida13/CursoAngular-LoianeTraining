import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { Component, OnInit, OnDestroy, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  inscricao: Subscription = new Subscription()
  aluno: any = {}
  private formMudou: boolean = false

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']
        this.aluno = this.alunosService.getAluno(id)

        if(this.aluno === null) { //se o aluno for nulo, inicializa ele como vazio
          this.aluno = {}
        }
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  //verificando se o campo do formulário teve alguma mudança | forma primitiva
  onInput(){
    this.formMudou = true
  }

  //Se o form mudou, será retornado uma confirmação, se o form não mudou, pode mudar de rota
  podeMudarRota() {
    
    //se o form mudou, retorna uma confirmação pra mudar de rota
    if(this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?') 
    }
    
    //se mudou, pode mudar de rotas
    return true
  }
  
  podeDesativar(){
    return this.podeMudarRota()
  }
}
