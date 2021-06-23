import { Component } from '@angular/core';
import { ButtonConfiguration } from '../../components/button/buttonConfiguration';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent {
    buttonConfiguration: ButtonConfiguration = {
        type: 'accept',
        themeColor: 'warn',
        label: 'button label',
        isRtl: true,
        tailwindsClassForLabel: 'mx-5',
        hasToolTip: true,
        tooltipText: 'tooltip text',
        tooltipPosition: 'after',
        hasIcon: true,
        icon: 'add',
    };
}
