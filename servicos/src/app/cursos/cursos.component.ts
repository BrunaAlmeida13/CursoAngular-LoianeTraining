import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  //Quando se quer que o serviço seja usado apenas em um component, declara ele aqui
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = []

  //A injeção de dependência vai criar essa instância de forma automática
  constructor(private cursosService: CursosService) {

  }

  //Boas práticas: Quando se obtém dados, é bom utilizar o método onInit, porque esse método é o que será executado quando essa classe for inicializada
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()

    //Tem que inicializar a inscrição nesse evento para que esse component sempre possa ser notificado de qualquer mudança
    CursosService.criouNovoCurso.subscribe(curso => this.cursos.push(curso))
  }

}
