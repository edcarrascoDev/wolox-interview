import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http/http.service';
import { CommonComponent } from '../../abstract/common-component';
import { take } from 'rxjs/operators';
import { Pokemon, PokemonResponse } from '../../definitions/models';
import { ButtonSize } from '../../definitions/enum';

@Component({
    selector: 'app-pokemon-table',
    templateUrl: './pokemon-table.component.html',
    styleUrls: ['./pokemon-table.component.scss'],
})
export class PokemonTableComponent extends CommonComponent implements OnInit {
    limit = '20';
    offset = '0';
    pokemonResponse: PokemonResponse;

    pokemonSelected: Pokemon[] = [];

    buttonSize = ButtonSize.Small;

    openModal = false;

    constructor(private httpService: HttpService) {
        super();
    }

    ngOnInit() {
        this.getAllPokemon();
    }

    getAllPokemon() {
        this.httpService
            .getPokemons(this.limit, this.offset)
            .pipe(take(1))
            .subscribe((response) => {
                this.pokemonResponse = response;
            });
    }

    onPokemonSelected(pokemon: Pokemon) {
        if (!this.pokemonSelected.includes(pokemon)) {
            this.pokemonSelected = [...this.pokemonSelected, pokemon];
        } else {
            this.pokemonSelected.splice(this.pokemonSelected.indexOf(pokemon), 1);
        }
    }
}
