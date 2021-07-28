import { Component, OnInit } from '@angular/core';
import { ButtonStyle } from '../../definitions/enum';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    buttonStyle = ButtonStyle;
    constructor() {}

    ngOnInit(): void {}
}
