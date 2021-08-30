import { Component, Input, OnChanges } from '@angular/core';
import { InputFormConfiguration } from '../../models/inputFormConfiguration.model';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
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
