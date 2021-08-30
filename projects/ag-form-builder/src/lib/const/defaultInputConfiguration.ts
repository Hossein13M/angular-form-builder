import { InputFormConfiguration } from '../models/inputFormConfiguration.model';

export const defaultInputConfiguration: InputFormConfiguration = {
    componentType: 'input',
    formControlName: null,
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
