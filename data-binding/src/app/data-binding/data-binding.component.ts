import { Component, OnInit, ViewChild, Input  } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'http://loiane.com'
  cursoAngular: boolean = true
  urlImagem = 'http://lorempixel.com/400/200/sports/'
  valorAtual: string = ''
  valorSalvo: String = ''
  isMouseOver: boolean = false
  nomeDoCurso: string = 'Angular'
  valorInicial: number = 15

  constructor() { }

  onMudouValor(evento: any) {
    console.log(evento.novoValor)
  }

  //Como esse arquivo tem extensão .ts, não precisa da palavra reservada function
  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  botaoClicado() {
    alert('Botão clicado!')
  }

  //target é a tag html, e se busca o valor digitado de dentro dela (é possível ver usando o console do navegador)
  //o evento.target é do tipo HTMLInputElement | Essas interfaces existem para facilitar o trabalho com todos os objetos que existem no typescript
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string){
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver //quando colocar o mouse sobre se torna true, se não passar ficará o valor default false
  }
}