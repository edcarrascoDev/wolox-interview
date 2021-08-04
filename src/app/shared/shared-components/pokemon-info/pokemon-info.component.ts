import { Component, Input, OnInit } from '@angular/core';
import { Effect, Pokemon } from '../../definitions/models';

@Component({
    selector: 'app-pokemon-info',
    templateUrl: './pokemon-info.component.html',
    styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent {
    @Input() pokemon: Pokemon;

    generationToShow(generation: string) {
        return generation.split('-').pop();
    }

    filteredEffects(effects: Effect[]) {
        return effects.filter((effect) => effect.language.name === 'en');
    }
}
