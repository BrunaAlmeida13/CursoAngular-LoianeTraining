import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number = 0
  inscricao: Subscription = new Subscription();
  curso: any

  //Usando a injeção de dependência, para injetar um classe que vai obter o valor passado na rota
  constructor(private route: ActivatedRoute, private cursosService: CursosService, private router: Router) { 
    /*console.log(this.route) //descobrindo o tipo de parâmetro que se precisa pra capturar o valor | olhar no F12
    this.id = this.route.snapshot.params['id']
    //Como o objeto onde o id está alocado, é dinâmico, o ideal é colocar o id como uma chave (de chave-valor)*/
  }

  //ngOnInit é o melhor lugar quando se quer carregar informações
  ngOnInit(): void {
    //usando lyfe cycle roots
    //Se inscrevendo na rota, para escutar as mudanças do behavior subject
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id']
        this.curso = this.cursosService.getCurso(this.id)

        //router é um classe que cuida do redirecionamento através do código | ROTEAMENTO IMPERATIVO
        if(this.curso == null) {
          //Aqui também pode passar outra informação, se necessário, ex: (['/naoEcontrado', this.id])
          this.router.navigate(['/cursos/naoEncontrado'])
        }
      }
    )
  }

  //Quando se faz a inscrição, mesmo a classe curso-detalhe sendo destruída, essa inscrição pde continuar viva
  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }
}
