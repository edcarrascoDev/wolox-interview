import { Component } from '@angular/core';
import { SPECS } from '../../definitions/contants';

@Component({
    selector: 'app-specs',
    templateUrl: './specs.component.html',
    styleUrls: ['./specs.component.scss'],
})
export class SpecsComponent {
    specs = SPECS;
}
