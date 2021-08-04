import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SocialBoxComponent } from './social-box/social-box.component';
import { SpecsComponent } from './specs/specs.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryListComponent } from './country-list/country-list.component';
import { HttpService } from '../../http/http.service';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { ModalComponent } from './modal/modal.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, PipesModule],
    declarations: [
        HeaderComponent,
        ButtonComponent,
        NavigationComponent,
        HeroComponent,
        SocialBoxComponent,
        SpecsComponent,
        FooterComponent,
        SignUpFormComponent,
        CountryListComponent,
        PokemonTableComponent,
        TableActionsComponent,
        TableHeadComponent,
        ModalComponent,
        PokemonInfoComponent,
    ],
    exports: [
        HeaderComponent,
        ButtonComponent,
        HeroComponent,
        SocialBoxComponent,
        SpecsComponent,
        FooterComponent,
        SignUpFormComponent,
        CountryListComponent,
        PokemonTableComponent,
        PipesModule,
    ],
    providers: [HttpService],
})
export class SharedComponentsModule {}
