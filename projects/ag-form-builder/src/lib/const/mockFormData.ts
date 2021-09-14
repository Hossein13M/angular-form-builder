import { AgMockFormDataModel } from '../models/agMockFormData.model';

export const mockFormData: AgMockFormDataModel = {
    name: 'DastanForm',
    sections: [
        {
            columnInfo: [
                {
                    index: 0,
                    componentType: 'input',
                    componentInfo: {
                        componentType: 'input',
                        formControlName: 'input',
                        type: {
                            name: 'text',
                            icon: 'article',
                        },
                        label: 'input',
                        placeholder: 'input',
                        isInputTypePassword: false,
                        themeColor: 'primary',
                        isRtl: false,
                        hint: 'input',
                    },
                },
                {
                    index: 1,
                    componentType: 'input',
                    componentInfo: {
                        componentType: 'input',
                        formControlName: 'inputTwo',
                        type: {
                            name: 'tel',
                            icon: 'phone',
                        },
                        label: 'inputTwo',
                        placeholder: '54',
                        isInputTypePassword: false,
                        themeColor: 'primary',
                        isRtl: false,
                        hint: 'inputTwo',
                    },
                },
                {
                    index: 2,
                    componentType: 'date',
                    componentInfo: {
                        formControlName: 'datePicker',
                        label: 'datePicker',
                        componentType: 'datepicker',
                        datePickerIcon: 'calendar_today',
                        themeColor: 'primary',
                        popupColor: 'accent',
                        locale: 'en-US',
                        disableMode: 'input',
                        hint: 'datePicker',
                        appearance: 'outline',
                    },
                },
            ],
            columnsCount: 3,
        },
        {
            columnInfo: [
                {
                    index: 0,
                    componentType: 'date',
                    componentInfo: {
                        formControlName: 'datePickerTwo',
                        label: 'datePickerTwo',
                        componentType: 'datepicker',
                        datePickerIcon: 'event',
                        themeColor: 'accent',
                        popupColor: 'warn',
                        locale: 'en-US',
                        disableMode: 'input',
                        hint: 'datePickerTwo',
                        appearance: 'outline',
                    },
                },
                {
                    index: 1,
                    componentType: 'input',
                    componentInfo: {
                        componentType: 'input',
                        formControlName: 'inputThree',
                        type: {
                            name: 'text',
                            icon: 'article',
                        },
                        label: 'inputThree',
                        placeholder: '',
                        isInputTypePassword: false,
                        themeColor: 'primary',
                        isRtl: false,
                        hint: '',
                    },
                },
            ],
            columnsCount: 2,
        },
    ],
};
