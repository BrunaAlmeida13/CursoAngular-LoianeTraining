import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CursosService {
//O construtor aqui é implícito, então está vazio

    emitirCursoCriado = new EventEmitter<string>() //Sempre que acontecer um novo evento, ele vai notificar o código para que ele escute e faça algo com aquela informação
    private cursos: string[] = ['Angular 2', 'Java', 'JavaScript', 'TypeScript']

    constructor() {
        console.log('CursosService')
    }

    getCursos() {
        return this.cursos
    }

    //Esse método realiza a lógica, e no component criar-curso tem a passagem de dados para a tela
    addCurso(curso: string) {
        this.cursos.push(curso)
        this.emitirCursoCriado.emit(curso) // emitindo o evento 
        //Sempre que o método adicionar curso for chamado, faz-se o this.emitirCursoCriado.emitir uma info
    }
}