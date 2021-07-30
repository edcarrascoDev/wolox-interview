import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpRequest } from '../shared/definitions/models';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) {}

    getCountriesByName(searchValue: string): Observable<any> {
        return this.http.get(`https://restcountries.eu/rest/v2/name/${searchValue}`);
    }

    postRegistry(body: SignUpRequest) {
        return this.http.post(
            'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup',
            body,
        );
    }
}
