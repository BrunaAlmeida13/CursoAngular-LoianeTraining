import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = []
  cursosService: CursosService

  //A injeção de dependência vai criar essa instância de forma automática
  constructor() {
    //this.cursosService = new CursosService()
  }

   //Boas práticas: Quando se obtém dados, é bom utilizar o método onInit, porque esse método é o que será executado quando essa classe for inicializada
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

}
