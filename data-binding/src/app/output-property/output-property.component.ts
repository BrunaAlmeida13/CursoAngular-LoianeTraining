import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  /*
  A intenção é colocar um evento de escuta no contador, para que o component pai (data-binding) possa pegar o valor e fazer alguma lógica em cima dele. 
  */
  @Output() mudouValor = new EventEmitter() //new EmissorDeEventos

  @Input() valor: number = 0 // como está sendo usado o property binding, o valor será atualizado instantâneamente

  //Fazendo associação entre a variável do template e a variável com component
  @ViewChild('campoInput') campoValorInput: ElementRef

  constructor() {}

  //Toda vez que mudar o valor, será emito o evento
  incrementa() {
    //nativeElement é uma referência ao input
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit({novoValor: this.valor})
  }

  ngOnInit(): void {
  }

}
