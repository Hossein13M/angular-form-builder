import { Datepicker } from '../models/datepicker.model';

export const defaultDatepickerConfiguration: Datepicker = {
    componentType: 'datepicker',
    formControlName: '',
    appearance: 'outline',
    label: 'label',
    themeColor: 'primary',
    popupColor: 'primary',
    isRtl: false,
    hint: 'hint',
    disableMode: 'input',
    datePickerIcon: 'calendar_today',
    locale: 'en-US',
};
