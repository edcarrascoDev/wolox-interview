import { Component, OnInit } from '@angular/core';
import { ButtonStyle, Color } from '../../definitions/enum';

@Component({
    selector: 'app-social-box',
    templateUrl: './social-box.component.html',
    styleUrls: ['./social-box.component.scss'],
})
export class SocialBoxComponent implements OnInit {
    buttonColor = Color;
    buttonStyle = ButtonStyle;

    constructor() {}

    ngOnInit(): void {}
}
