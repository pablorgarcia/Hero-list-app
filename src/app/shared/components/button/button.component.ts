import { Component, Input } from '@angular/core';
import { ButtonData } from './button.interface';

@Component({
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.btn-disabled]': 'disabled || null',
    '[class.btn-enabled]': '!disabled'
  },
  inputs: ['data', 'disabled']
})
export class ButtonComponent {

  @Input() data: ButtonData;
  @Input() disabled: boolean;

  constructor() {}

}
