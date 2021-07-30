import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'registro',
                loadChildren: () => import('./sign-up/sign-up.module').then((m) => m.SignUpModule),
            },
            {
                path: 'pokemon',
                loadChildren: () => import('./pokemon/pokemon.module').then((m) => m.PokemonModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
