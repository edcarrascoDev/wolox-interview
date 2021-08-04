import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../definitions/models';
@Component({
    selector: 'app-table-head',
    templateUrl: './table-head.component.html',
    styleUrls: ['./table-head.component.scss'],
})
export class TableHeadComponent implements OnInit {
    @Input() pokemonSelected: Pokemon[];

    constructor() {}

    ngOnInit(): void {}
}
