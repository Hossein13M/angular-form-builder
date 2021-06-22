import { Component } from '@angular/core';
import { ButtonModel } from '../../components/button/button.model';

@Component({
    selector: 'app-form-builder-wrapper',
    templateUrl: './form-builder-wrapper.component.html',
    styleUrls: ['./form-builder-wrapper.component.scss'],
})
export class FormBuilderWrapperComponent {
    public componentsListConfiguration: Array<ButtonModel> = [
        {
            type: 'accept',
            themeColor: 'primary',
            label: 'input component',
            // isRtl?: boolean,
            // tailwindsClassForLabel?: string,
            hasToolTip: true,
            tooltipText: 'input component',
            tooltipPosition: 'below',
            tooltipHideDelay: 500,
            hasIcon: true,
            icon: 'add',
        },
        {
            type: 'accept',
            themeColor: 'primary',
            label: 'button component',
            // isRtl?: boolean,
            // tailwindsClassForLabel?: string,
            hasToolTip: true,
            tooltipText: 'button component',
            tooltipPosition: 'below',
            tooltipHideDelay: 500,
            hasIcon: true,
            icon: 'add',
        },
    ];
    public saveForm(): void {
        console.log('saveForm');
    }
    public clearForm(): void {
        console.log('clearForm');
    }
}
