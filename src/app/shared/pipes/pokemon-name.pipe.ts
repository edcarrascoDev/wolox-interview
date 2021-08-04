import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pokemonName',
})
export class PokemonNamePipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/-/g, ' ');
    }
}
