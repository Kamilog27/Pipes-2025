import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'heroeColor'
})

export class HeroeColorPipe implements PipeTransform {
    transform(value: number): string {
        return value == 0 ? 'red' : value == 1 ? 'black' : value == 2 ? 'blue' : value == 3 ? 'green':'';
    }
}