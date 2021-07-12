import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  usuario: any = {
    nome:'Bruna', 
    email: 'bruna@email'
  }

  constructor() { }

  ngOnInit(): void {
  }

  /* Se o two-way data binding estiver sendo usado, e se tiver todos os campos do formulário sendo 
  referenciado, na hora de se submeter, pode-se usar tanto form.value, quanto referenciar o próprio obejto | this.usuario
  */
  onSubmit(form: any) {
    console.log(form.value)

    console.log(this.usuario)
  }

 
}
