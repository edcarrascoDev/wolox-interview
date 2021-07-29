import { Subject } from 'rxjs';
import { Directive, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appCommonComponent]',
})
export abstract class CommonComponent implements OnDestroy {
    destroyed$: Subject<void> = new Subject<void>();

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
