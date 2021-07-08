import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

//As rotas filhas servem para evitar repetição de código e para quando se quer renderizar o component pai e o component filho.
const alunosRoutes: any = [
    { path: '', component: AlunosComponent, children: [
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent }
    ] }
    
]

/*
    'alunos/novo' tem que vir primeiro, porque quando se coloca mais de um parâmetro, vai acontecer uma rota de colisão, portanto o Angular reconheceria o novo no lugar do id, já que esse parâmetro é opcional e dinâmico
*/
//As rotas são avaliadas na ordem em que são declaradas aqui
/*const alunosRoutes: any = [
    { path: 'alunos', component: AlunosComponent},
    { path: 'alunos/novo', component: AlunoFormComponent },
    { path: 'alunos/:id', component: AlunoDetalheComponent },
    { path: 'alunos/:id/editar', component: AlunoFormComponent }
]*/

@NgModule({
    imports: [ RouterModule.forChild(alunosRoutes) ],
    exports: [ RouterModule ] //Exportando para ter acesso às diretivas 
})
export class AlunosRoutingModule {}