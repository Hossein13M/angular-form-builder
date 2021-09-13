import { AgInputFormConfiguration } from '../models/agInputFormConfiguration.model';

export const defaultInputConfiguration: AgInputFormConfiguration = {
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
