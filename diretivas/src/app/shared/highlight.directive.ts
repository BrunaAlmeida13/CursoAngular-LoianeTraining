import { Directive, HostListener, HostBinding, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') onMouseOut(){
    this.backgroundColor = this.defaultColor
  }
  /*
    HostBinding permite que se faça a associação de um determinado atributo da diretiva pra um determinado atributo do HTML.
    Ele vai ficar escutando evento no hospedeiro da diretiva (tag HTML)
  */
  @HostBinding('style.backgroundColor') backgroundColor: string  = ''

  @Input() defaultColor: string = 'white'
  @Input('highlight') highlightColor: string = 'purple'

  constructor() { }

  //Usando o lyfe cycle root nas diretivas
  //Usando o método que vai executar quando o componente inicializar
  //Também podia usar o end, que é quando a variável @Input muda
  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }
}