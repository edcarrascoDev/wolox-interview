import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class UiService {
    constructor() {}
    getControlError(errors: ValidationErrors): string {
        if (errors) {
            const errorsKeys = Object.keys(errors).filter((key) => {
                return !!errors[key];
            });
            const errorKey = errorsKeys[0];
            const error: ValidationErrors = errors[errorKey];

            switch (errorKey) {
                case 'required':
                    return '*Campo Requerido';
                case 'minlength':
                    return `Se requiere un mínimo de ${error.requiredLength} caracteres`;
                case 'maxlength':
                    return `Se requiere un máximo de ${error.requiredLength} caracteres`;
                case 'pattern':
                    return 'Invalid Characters';
                case 'email':
                    return 'Correo electrónico inválido';
                default:
                    return errorKey;
            }
        }

        return '';
    }

    getLocalStorage<T>(key: string): T {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
    }

    setLocalStorage<T>(key: string, data: T) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}
