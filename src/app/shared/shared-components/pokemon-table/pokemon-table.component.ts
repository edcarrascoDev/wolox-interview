import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http/http.service';
import { CommonComponent } from '../../abstract/common-component';
import { take } from 'rxjs/operators';
import { PokemonResponse } from '../../definitions/models';

@Component({
    selector: 'app-pokemon-table',
    templateUrl: './pokemon-table.component.html',
    styleUrls: ['./pokemon-table.component.scss'],
})
export class PokemonTableComponent extends CommonComponent implements OnInit {
    limit = '20';
    offset = '0';
    pokemonResponse: PokemonResponse;
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
}
