import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResponse, SignUpRequest } from '../shared/definitions/models';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    pokemonUrl = 'https://pokeapi.co/api/v2/ability/';

    constructor(private http: HttpClient) {}

    getCountriesByName(searchValue: string): Observable<any> {
        return this.http.get(`https://restcountries.eu/rest/v2/name/${searchValue}`);
    }

    postRegistry(body: SignUpRequest) {
        return this.http.post(
            'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup',
            body,
        );
    }

    getPokemons(limit: string, offset: string): Observable<PokemonResponse> {
        return this.http.get<PokemonResponse>(this.pokemonUrl, { params: { limit, offset } });
    }

    getPokemonByName(name: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.pokemonUrl}${name}`);
    }
}
