import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productArray',

})
export class ProductArrayPipe implements PipeTransform {

  transform(numeros: number[]): number {

    let soma = 0;

    for(let numero of numeros){
      soma += numero;
    }

    return soma;
  }

}
