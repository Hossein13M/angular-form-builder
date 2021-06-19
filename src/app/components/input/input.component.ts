import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputFormConfiguration } from './input.model';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
    @Input('inputFormConfiguration') inputFormConfiguration: InputFormConfiguration = {
        formControl: new FormControl(),
        type: 'text',
        placeholder: 'placeholder',
        label: 'test',
        isInputTypePassword: false,
        color: 'primary',
        isRtl: false,
        autofocus: false,
        readonly: false,
        errorMessages: [{ errorName: 'email', errorMessage: 'hello' }],
        hint: 'hint',
    };

    public inputMode: 'email' | 'numeric' | 'url' | 'tel' | 'text' = 'text';
    public hideText = false;

    ngOnChanges(): void {
        if (!this.FC) throw new Error('FC Input is required');
        if (this.inputFormConfiguration.isInputTypePassword) this.hideText = true;

        switch (this.inputFormConfiguration.type) {
            case 'email':
            case 'tel':
            case 'url':
                this.inputMode = this.inputFormConfiguration.type;
                break;
            case 'number':
                this.inputMode = 'numeric';
                break;
            default:
                this.inputMode = 'text';
        }
    }

    public get FC(): FormControl {
        return this.inputFormConfiguration.formControl as FormControl;
    }
}
