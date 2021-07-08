import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  inscricao: Subscription = new Subscription()
  aluno: any = {}
  private formMudou: boolean = false;

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

  onInput(){
    this.formMudou = true;
    console.log('mudou');
  }
}
