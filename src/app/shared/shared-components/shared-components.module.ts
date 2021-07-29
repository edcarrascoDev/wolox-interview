import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SocialBoxComponent } from './social-box/social-box.component';
import { BenefitsComponent } from './benefits/benefits.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ButtonComponent,
        NavigationComponent,
        HeroComponent,
        SocialBoxComponent,
        BenefitsComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, ButtonComponent, HeroComponent, SocialBoxComponent],
})
export class SharedComponentsModule {}
