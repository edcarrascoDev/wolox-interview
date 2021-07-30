import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [PokemonComponent],
    imports: [CommonModule, PokemonRoutingModule, SharedModule],
})
export class PokemonModule {}
