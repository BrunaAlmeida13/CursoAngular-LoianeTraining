import { TemplateLiteral } from '@angular/compiler';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {
  //Criando uma diretiva de estrutura
  //criando ngElse para ser uma input property
  
  //Toda vez que ele for settado/modificado, vai executar esse método
  @Input() set ngElse(condition: boolean) {
    if(!condition){
      //Renderizando a view embutida no template
      this._viewContainerRef.createEmbeddedView(this._templateRef)
    } else {
      //caso a condição seja verdadeira, o elemento será destruído
      this._viewContainerRef.clear()
    }
  }

  constructor(
    //Como a diretiva poderá ser usada em qualquer tag, se coloca <any>
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}

/**
 * TemplateRef - faz referência ao template <template></template>
 * ViewContainerRef - faz referência ao conteúdo que se quer renderizar (no caso será a div)
 */