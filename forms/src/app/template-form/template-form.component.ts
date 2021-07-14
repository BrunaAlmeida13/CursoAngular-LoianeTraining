import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  usuario: any = {
    nome: null, 
    email: null
  }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  /* Se o two-way data binding estiver sendo usado, e se tiver todos os campos do formulário sendo 
  referenciado, na hora de se submeter, pode-se usar tanto form.value, quanto referenciar o próprio obejto | this.usuario
  */
  onSubmit(form: any) {
    console.log(form) //form para acessar os controles | aperta enter

    //console.log(this.usuario) |  console.log(form.value)
  }

  consultaCEP(cep: any) {
    //console.log(cep)
    //Fazendo replace de qualquer dígito não numérico
    cep = cep.replace(/\D/g, '')

    //verifica se o campo cep possui valor informado
    if(cep != "") {
      //Expressão regular que valida o cep | ele precisa ter {8} dígitos, com n de 0 a 9
      var validacep = /^[0-9]{8}$/
      
      //valida o formato do cep
      if(validacep.test(cep)) {
        //Usando a chamada AJAX usando um JSON, utilizando o Angular
      }
    }
  }
 
}
