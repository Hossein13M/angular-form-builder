import { FormControl } from '@angular/forms';
import { InputFormConfiguration } from '../models/inputFormConfiguration.model';

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
