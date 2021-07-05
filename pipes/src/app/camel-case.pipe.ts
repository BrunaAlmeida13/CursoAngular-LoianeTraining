import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase' //Esse é o nome que será usado no template
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ')
    let result = ''

    for(let v of values) {
      result += this.capitalize(v) + ' '
    }

    return result;
  }

  capitalize(value: string) { // vai transformar a primeira letra em maiúscula, e o resto em minúscula
    return value.substr(0,1).toUpperCase() + 
      value.substr(1).toLowerCase()
  }

}
