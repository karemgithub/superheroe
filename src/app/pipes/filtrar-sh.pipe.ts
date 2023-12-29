import { Pipe, PipeTransform } from '@angular/core';
import { Superheroe } from '../models/superheroe.model';

@Pipe({
  name: 'filtrarSH',
  standalone: true
})
export class FiltrarSHPipe implements PipeTransform {
 
  transform(value: Superheroe[], superheroe: string): Superheroe[] {
    let aux: Superheroe[] = [];
    if (superheroe == '') {
      return value;
    }
    else {
      for (let sh of value) {
        if (sh.superheroe.toLowerCase().indexOf(superheroe) > -1) {         
          aux.push(sh);
        }
      }
    }
    return aux;
  }
}
