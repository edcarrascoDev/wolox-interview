import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonComponent } from '../../abstract/common-component';
import { CustomValidators } from '../../validators/custom-validators';
import { UiService } from '../../../ui/ui.service';
import { Country } from '../../definitions/models';
import { HttpService } from '../../../http/http.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent extends CommonComponent implements OnInit {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private uiService: UiService,
        private httpService: HttpService,
    ) {
        super();
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = this.formBuilder.group(
            {
                name: [null, [Validators.required, Validators.maxLength(30)]],
                lastname: [null, [Validators.required, Validators.maxLength(30)]],
                country: [null, Validators.required],
                province: [null, Validators.required],
                email: [null, [Validators.required, Validators.email]],
                phone: [
                    null,
                    [Validators.required, Validators.minLength(6), Validators.maxLength(10)],
                ],
                password: [null, [Validators.required, Validators.minLength(6)]],
                confirmPassword: [null, [Validators.required]],
            },
            { validators: CustomValidators.checkPasswords },
        );

        this.listenToFormChange();
    }

    listenToFormChange() {}

    markControlsAsTouched() {}

    setCountryValue(country: Country) {
        if (country) {
            this.form.patchValue({ country: country.name, province: country.capital });
        } else {
            this.form.get('country').markAsDirty();
        }
    }

    getError(controlName: string): string {
        const { errors } = this.form.get(controlName);

        return this.form.get(controlName).dirty || this.form.get(controlName).touched
            ? this.uiService.getControlError(errors)
            : null;
    }

    submit() {
        if (this.form.valid) {
            this.httpService
                .postRegistry(this.form.value)
                .pipe(take(1))
                .subscribe((response) => {
                    if (response) {
                        this.uiService.setLocalStorage('user', this.form.value);
                    }
                });
        } else {
            this.markControlsAsTouched();
        }
    }
}
