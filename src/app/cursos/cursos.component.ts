import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html', //template - tag html inline (max 3 linhas), templateUrl - referenciando um arquivo .html
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  //Ex.: Se a URL do portal vem de outro lugar, tem que se criar uma variável na classe do component
  nomePortal: string
  cursos: string[]

  //Colocando nos parâmetros do constructor, n há a necessidade de instanciar e criar uma variável local.

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training'
    
    this.cursos = this.cursosService.getCursos()
  }

  ngOnInit(): void {
  }

}