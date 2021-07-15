import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

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

    //Fazendo a chamada para o servidor | E passando pro servidor um objeto em formato json para melhor leitura
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).pipe(map(res => res)).subscribe(dados => console.log(dados))
  }

  consultaCEP(cep:any, form:any) {
    //console.log(cep)
    //Fazendo replace de qualquer dígito não numérico
    cep = cep.replace(/\D/g, '')

    //verifica se o campo cep possui valor informado
    if(cep != "") {
      //Expressão regular que valida o cep | ele precisa ter {8} dígitos, com n de 0 a 9
      var validacep = /^[0-9]{8}$/
      
      //valida o formato do cep
      if(validacep.test(cep)) {
        //vai resetar o form antes de fazer uma nova consulta
        this.resetarDadosForm(form)

        /*-> Pega-se os dados que estão sendo enviados pelo servidor, e esses dados estão em formato   json
          || Mapeando a info que vem de um servidor em um json ||
          -> O operador map necessita ser importado
          -> Subscribe - o AXJS vai notificar quando a info estiver pronta (então seria a execução de uma função em caso de sucesso, ou de uma lógica em caso de erro)
        */
        this.http.get(`//viacep.com.br/ws/${cep}/json/`).subscribe(dados => this.popularDadosForm(dados, form))
        //.pipe(map(dados => dados.json())) <- depreciado
      }
    }
  }
 
  //Como toda lógica está no HTML, precisa-se referenciar o form
  popularDadosForm(dados:any, formulario:any) {
    //O método setValue recebe um objeto como parâmetro, e dentro desse objeto se coloca os campos do form
    /*formulario.setValue({
      nome: formulario.value.nome, //tem que colocar assim para o nome não ser resetado quando o cep atualizar o form
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })*/

    //Dentro do patchValue se faz o arremendo apenas das partes que se precisa, assim não polui o código (formulario.value.email), caso o form tenha mais campos | Notar que não tem cep e número
    formulario.form.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetarDadosForm(formulario:any) {
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

}
