import { Component } from '@angular/core';
import { ButtonModel } from '../../components/button/button.model';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent {
    buttonConfiguration: ButtonModel = {
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
