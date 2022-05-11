import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(mensagem: string, limite: number = 30):string {
    if(mensagem.length > limite){
      return mensagem.slice(0, limite) + '...'
    }
    return mensagem;
  }

}
