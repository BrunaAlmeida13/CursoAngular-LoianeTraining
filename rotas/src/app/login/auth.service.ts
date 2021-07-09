import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _usuarioAutenticado: boolean = false
  mostrarMenuEmitter = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  //Ajuda para validar o tipo de dado que se está passando, e também ajuda no intellicense do próprio editor de texto 
  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '1'){
      this._usuarioAutenticado = true

      //Quando o usuário estiver autenticado, antes de mudar a rota, pega-se a a variável mostrarMenuEmitter e se emitir o valor de true, mostrará o menu
      this.mostrarMenuEmitter.emit(true)

      this.router.navigate(['/']) //se usuário estiver correto, será redirecionado para a homepage
    } else {
      this._usuarioAutenticado = false
      this.mostrarMenuEmitter.emit(false)
    }
  }

  usuarioEstaAutenticado() {
    return this._usuarioAutenticado
  }
}
