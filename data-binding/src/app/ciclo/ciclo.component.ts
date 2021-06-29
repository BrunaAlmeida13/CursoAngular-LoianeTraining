import { Component, OnInit, DoCheck,  OnChanges, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, DoCheck,  OnChanges, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

 @Input() valorInicial: number = 10

  constructor() { //primeiro é necessário criar o objeto
    this.log('costructor')
  }
  /*
  ngOnInit é um dos métodos mais usados, porque é geralmente dentro desse método que se faz a chamada para o servidor, pra obter os dados e mostrar no template
  */
  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngOnChanges() {
    this.log('ngOnChanges')
  }

  ngDoCheck() {
    this.log('ngDoCheck')
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
    
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }
  
  ngOnDestroy() {
    this.log('ngOnDestroy')
  }
  
  private log(hook: string) { //serve para não repetir o console.log()
    console.log(hook)
  }

}
