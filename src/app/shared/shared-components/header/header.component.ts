import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { CommonComponent } from '../../abstract/common-component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends CommonComponent {
    scrollPosition: number = document.documentElement.scrollTop;

    constructor() {
        super();
        fromEvent(window, 'scroll')
            .pipe(takeUntil(this.destroyed$))
            .subscribe((e) => (this.scrollPosition = this.getYPosition(e)));
    }

    getYPosition(e): number {
        return (e.target.documentElement as Element).scrollTop;
    }
}
