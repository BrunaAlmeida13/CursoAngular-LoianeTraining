import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string = ''
  inscricao: Subscription = new Subscription;

  //Usando a injeção de dependência, para injetar um classe que vai obter o valor passado na rota
  constructor(private route: ActivatedRoute) { 
    /*console.log(this.route) //descobrindo o tipo de parâmetro que se precisa pra capturar o valor | olhar no F12
    this.id = this.route.snapshot.params['id']
    //Como o objeto onde o id está alocado, é dinâmico, o ideal é colocar o id como uma chave (de chave-valor)*/
  }

  ngOnInit(): void {
    //usando lyfe cycle roots
    //Se inscrevendo na rota, para escutar as mudanças do behavior subject
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id']
    })
  }

  //Quando se faz a inscrição, mesmo a classe curso-detalhe sendo destruída, essa inscrição pde continuar viva
  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }
}
