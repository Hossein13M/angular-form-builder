import { Component, Input, OnChanges } from '@angular/core';
import { InputFormConfiguration } from '../../models/inputFormConfiguration.model';

@Component({
    selector: 'ag-input',
    templateUrl: './ag-input.component.html',
    styleUrls: ['./ag-input.component.scss'],
})
export class AgInputComponent implements OnChanges {
    public hideInputTextForPasswordInputs = false;
    @Input() readonlyForDemo: boolean = false;
    @Input() inputFormConfiguration: InputFormConfiguration = {
        componentType: 'input',
        formControlName: '',
        type: { name: 'text', icon: 'article' },
        placeholder: 'placeholder',
        label: 'test',
        isInputTypePassword: true,
        themeColor: 'primary',
        isRtl: false,
        autofocus: false,
        readonly: false,
        errorMessages: [{ errorName: 'email', errorMessage: 'hello' }],
        hint: 'hint',
    };

    ngOnChanges(): void {
        if (this.inputFormConfiguration.isInputTypePassword) this.hideInputTextForPasswordInputs = true;
    }
}
