import { InputFormConfiguration } from '#models/inputFormConfiguration.model';

export const defaultInputConfiguration: InputFormConfiguration = {
    componentType: 'input',
    formControl: '',
    type: 'text',
    label: '',
    placeholder: '',
    isInputTypePassword: false,
    themeColor: 'primary',
    isRtl: false,
    autofocus: false,
    readonly: false,
    hint: '',
};
