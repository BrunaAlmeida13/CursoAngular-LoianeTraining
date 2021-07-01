import { Directive, ElementRef, Renderer2 } from '@angular/core';

/**
 * Para restringir o uso da diretiva em determinadas tags, se coloca o nome dela na frente do selector. Ex.: p[fundoAmarelo], button[fundoAmarelo]
 */
@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  //Usando a injeção de dependência
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { 
    //console.log(this._elementRef)
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow' - código inseguro sujeito à ataques de XXS, devido ao direto acesso o nativeElement
    //this._renderer.setElementStyle() Render
    this._renderer.setStyle(this._elementRef.nativeElement, 'backgound-color', 'yellow') //Render2
  }

}