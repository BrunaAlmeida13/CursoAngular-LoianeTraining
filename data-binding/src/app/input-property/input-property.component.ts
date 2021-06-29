import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  //Utilizando o declarator input, é possível expor uma propriedade chamada nome_propriedade, para o seletor nome-selector
  /* @INPUT -> Reuso de properties
    Para usar dentro do input-property.component.html
    Então fica nomeCurso para usar internamente (input-property.component.html), e nome para ser usado externamente (<app-curso [nome]="nomeDoCurso">)
    Se o nome for o mesmo para fora e para dentro, não precisa colocar parâmetros no input
  */
  @Input('nome') nomeCurso: string = '' 
  constructor() { }

  ngOnInit(): void {
  }

}
