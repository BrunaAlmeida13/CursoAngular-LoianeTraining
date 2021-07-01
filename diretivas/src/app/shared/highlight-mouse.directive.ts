import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';
/**
 * Pode-se escutar um evento de um elemento HTML que está utilizando a diretiva, usando uma classe chamada HostListener (que é o elemento hospedeiro da diretiva, que no caso é a tag p)
 */
@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  /*vai escutar quando o mouse passar por cima |tem que ter o declarator, o evento que se quer escutar e um nome qualquer para o método|
  */
  @HostListener('mouseenter') onMouseOver(){
    //this.renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'purple')
    this.backgroundColor = 'purple'
  }

  @HostListener('mouseleave') onMouseOut(){
    //this.renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'rgb(180, 170, 170)')
    this.backgroundColor = 'rgb(180, 170, 170)'
  }
  /*
    HostBinding permite que se faça a associação de um determinado atributo da diretiva pra um determinado atributo do HTML.
    Ele vai ficar escutando evento no hospedeiro da diretiva (tag HTML)
  */
  @HostBinding('style.backgroundColor') backgroundColor: string = ''

  constructor(
    //private _elementRef: ElementRef, 
    //private renderer: Renderer2
  ) { }

}
