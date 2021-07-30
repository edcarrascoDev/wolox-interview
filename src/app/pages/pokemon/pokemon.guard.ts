import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UiService } from '../../ui/ui.service';

@Injectable({
    providedIn: 'root',
})
export class PokemonGuard implements CanActivate {
    constructor(private uiService: UiService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const user = this.uiService.getLocalStorage('user');
        if (Object.keys(user).length === 0) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
