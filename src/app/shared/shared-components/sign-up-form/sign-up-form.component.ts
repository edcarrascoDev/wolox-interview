import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonComponent } from '../../abstract/common-component';
import { takeUntil } from 'rxjs/operators';
import { CustomValidators } from '../../validators/custom-validators';
import { UiService } from '../../../ui/ui.service';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent extends CommonComponent implements OnInit {
    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private uiService: UiService) {
        super();
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.signUpForm = this.formBuilder.group(
            {
                name: [null, [Validators.required, Validators.maxLength(30)]],
                lastname: [null, [Validators.required, Validators.maxLength(30)]],
                country: [null, Validators.required],
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

    listenToFormChange() {
        this.signUpForm.statusChanges.pipe(takeUntil(this.destroyed$)).subscribe((status) => {
            console.log(status, this.signUpForm);
        });
    }

    formChange(formControlName: string, value: any) {
        console.log(formControlName, value);
        this.signUpForm.patchValue({
            [formControlName]: value,
        });
    }

    markControlsAsTouched() {}

    getError(controlName: string): string {
        const { errors } = this.signUpForm.get(controlName);

        return this.signUpForm.get(controlName).dirty || this.signUpForm.get(controlName).touched
            ? this.uiService.getControlError(errors)
            : null;
    }

    submit() {
        if (this.signUpForm.valid) {
        }
    }
}
