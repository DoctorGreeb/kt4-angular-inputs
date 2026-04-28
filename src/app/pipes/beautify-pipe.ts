import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beautify',
})
export class BeautifyPipe implements PipeTransform {
  transform(value: string): string {
    const minusUndScore = value.replace('-', ' ');
    const array = minusUndScore.split('');
    array[0] = array[0].toUpperCase();
    return array.join('').trim();
  }
}

