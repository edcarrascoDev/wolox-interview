import { Component, Input } from '@angular/core';
import { ButtonStyle, Color } from '../../definitions/enum';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() color: Color = Color.Primary;
    @Input() style: ButtonStyle = ButtonStyle.Raised;

    constructor() {}

    getButtonClasses() {
        return `wx-button--${this.color} wx-button--${this.style}`;
    }
}
