import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'heroeCreator'
})

export class HeroeCreatorPipe implements PipeTransform {
    transform(value: number): string {
        return value==0?'DC':'Marvel'
    }
}