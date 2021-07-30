import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    static checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        const password = group.get('password').value;
        const confirmPassword = group.get('confirmPassword').value;

        return password === confirmPassword ? null : { notSame: true };
    };
}
