import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRouting } from './home-routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRouting, SharedModule],
})
export class HomeModule {}
