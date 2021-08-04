import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSize, ButtonStyle, Color } from '../../definitions/enum';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() color: Color = Color.Primary;
    @Input() style: ButtonStyle = ButtonStyle.Raised;
    @Input() size: ButtonSize = ButtonSize.Normal;
    @Input() href: string;
    @Input() target = '_blank';
    @Input() disabled = false;

    @Output() emitClick: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    getButtonClasses() {
        return `wx-button--${this.color} wx-button--${this.style} wx-button--${this.size}`;
    }
}
