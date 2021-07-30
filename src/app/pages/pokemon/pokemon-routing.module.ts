import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonGuard } from './pokemon.guard';

const routes = [{ path: '', component: PokemonComponent, canActivate: [PokemonGuard] }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PokemonRoutingModule {}
