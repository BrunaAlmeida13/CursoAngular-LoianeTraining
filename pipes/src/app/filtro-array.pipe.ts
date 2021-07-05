import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {
  v: string[] = []
  transform(value: any, args?: any): any {
    if(value.length === 0 || args === undefined){
      return value;
    } 
    /*
    Se o valor que está sendo passado como filtro não existir dentro do Array, então ele será filtrado
    */
    let filter = args.toLocaleLowerCase()
    return value.filter(v => v.toLocaleLowerCase().indexOf(filter) != 1)
  }

}