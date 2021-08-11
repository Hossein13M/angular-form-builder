import { InputFormConfiguration } from '#models/inputFormConfiguration.model';
import { FormControl } from '@angular/forms';

export const defaultInputConfiguration: InputFormConfiguration = {
    componentType: 'input',
    formControl: new FormControl(),
    type: { name: 'text', icon: 'article' },
    label: '',
    placeholder: '',
    isInputTypePassword: false,
    themeColor: 'primary',
    isRtl: false,
    autofocus: false,
    readonly: false,
    hint: '',
};
