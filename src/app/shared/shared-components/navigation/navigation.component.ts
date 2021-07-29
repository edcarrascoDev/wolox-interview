import { Component } from '@angular/core';
import { NAVIGATION_MENU } from '../../definitions/contants';
import { ButtonStyle } from '../../definitions/enum';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    buttonStyle = ButtonStyle;
    navigationMenu = NAVIGATION_MENU;
    menuOpened = false;

    constructor() {}

    scrollTo(sectionId: string) {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }

        if (window.screen.width < 992) {
            this.toggleMenu();
        }
    }

    toggleMenu() {
        this.menuOpened = !this.menuOpened;
        document.body.style.overflow = this.menuOpened ? 'hidden' : 'visible';
    }
}
