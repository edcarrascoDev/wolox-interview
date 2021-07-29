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

@NgModule({
    declarations: [
        HeaderComponent,
        ButtonComponent,
        NavigationComponent,
        HeroComponent,
        SocialBoxComponent,
        SpecsComponent,
        FooterComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        HeaderComponent,
        ButtonComponent,
        HeroComponent,
        SocialBoxComponent,
        SpecsComponent,
        FooterComponent,
    ],
})
export class SharedComponentsModule {}
