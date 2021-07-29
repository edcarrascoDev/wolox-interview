import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SocialBoxComponent } from './social-box/social-box.component';
import { SpecsComponent } from './specs/specs.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ButtonComponent,
        NavigationComponent,
        HeroComponent,
        SocialBoxComponent,
        SpecsComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, ButtonComponent, HeroComponent, SocialBoxComponent, SpecsComponent],
})
export class SharedComponentsModule {}
