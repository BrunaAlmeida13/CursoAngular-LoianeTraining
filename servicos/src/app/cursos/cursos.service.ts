import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable({
    providedIn: 'root'
})
export class CursosService {
//O construtor aqui é implícito, então está vazio

    emitirCursoCriado = new EventEmitter<string>() //Sempre que acontecer um novo evento, ele vai notificar o código para que ele escute e faça algo com aquela informação
    
    static criouNovoCurso = new EventEmitter<string>() //usando o static diz que não é necessário uma instância da classe, para acessar o mesmo | Então quando as duas instâncias do CursoService forem criadas, a variável criouNovoCurso será compartilhada entre as instâncias, porque a mesma é static

    private cursos: string[] = ['Angular 2', 'Java', 'JavaScript', 'TypeScript']

    //Injetando um serviço em outro serviço
    constructor(private logService: LogService) {
        console.log('CursosService')
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos')
        return this.cursos
    }

    //Esse método realiza a lógica, e no component criar-curso tem a passagem de dados para a tela
    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso ${curso}`)
        this.cursos.push(curso)
        this.emitirCursoCriado.emit(curso) // emitindo o evento 
        //Sempre que o método adicionar curso for chamado, faz-se o this.emitirCursoCriado.emitir uma info
        CursosService.criouNovoCurso.emit(curso)
    }
}