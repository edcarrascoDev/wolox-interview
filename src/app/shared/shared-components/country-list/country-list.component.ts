import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../http/http.service';
import { CommonComponent } from '../../abstract/common-component';
import { takeUntil } from 'rxjs/operators';
import { Country } from '../../definitions/models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent extends CommonComponent implements OnInit {
    form: FormGroup;

    countries: Country[] = [];

    selectedCountry: Country;

    @Output() emitValue: EventEmitter<Country> = new EventEmitter<Country>();

    constructor(private httpService: HttpService, private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = this.formBuilder.group({
            country: [null],
        });

        this.listenToFormChange();
    }

    listenToFormChange() {
        const { country } = this.form.controls;

        country.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
            this.searchCountries(value);
        });
    }

    searchCountries(value: string) {
        if (value.length > 0 && !this.selectedCountry) {
            this.httpService
                .getCountriesByName(value)
                .pipe(takeUntil(this.destroyed$))
                .subscribe((countries) => {
                    this.countries = countries;
                });
        } else {
            this.countries = [];
            this.emitValue.emit(null);
        }
    }

    selectCountry(country: Country) {
        this.selectedCountry = country;
        this.countries = [];
        this.form.patchValue({ country: country.name });
        this.emitValue.emit(country);
    }

    onFocusOut() {
        if (!this.selectedCountry) {
            this.emitValue.emit(null);
        }
    }
}
