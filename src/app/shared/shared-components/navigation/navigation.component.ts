import { Component } from '@angular/core';
import { NAVIGATION_MENU } from '../../definitions/contants';
import { ButtonStyle } from '../../definitions/enum';
import { UiService } from '../../../ui/ui.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    buttonStyle = ButtonStyle;
    navigationMenu = NAVIGATION_MENU;
    menuOpened = false;

    sessionOpen = false;

    constructor(private uiService: UiService) {
        if (Object.keys(this.uiService.getLocalStorage('user')).length > 0) {
            this.sessionOpen = true;
        }
    }

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
