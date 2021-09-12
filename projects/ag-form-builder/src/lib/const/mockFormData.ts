import { MockFormDataModel } from '../models/mockFormData.model';

export const mockFormData: MockFormDataModel = {
    name: 'formName',
    sections: [
        {
            columnInfo: [
                {
                    index: 0,
                    componentType: 'input',
                    componentInfo: {
                        componentType: 'input',
                        formControlName: 'inputComponent',
                        type: {
                            name: 'text',
                            icon: 'article',
                        },
                        label: 'inputComponent',
                        placeholder: 'inputComponent',
                        isInputTypePassword: false,
                        themeColor: 'primary',
                        isRtl: false,
                        hint: 'inputComponent',
                    },
                },
                {
                    index: 1,
                    componentType: 'input',
                    componentInfo: {
                        componentType: 'input',
                        formControlName: 'telInputComponent',
                        type: {
                            name: 'tel',
                            icon: 'phone',
                        },
                        label: 'telInputComponent',
                        placeholder: '1234567899',
                        isInputTypePassword: false,
                        themeColor: 'accent',
                        isRtl: false,
                        hint: '1234567899',
                    },
                },
                {
                    index: 2,
                    componentType: 'button',
                    componentInfo: {
                        componentType: 'button',
                        formControlName: 'buttonComponent',
                        type: {
                            name: 'accept',
                            icon: 'check_circle',
                        },
                        width: '180',
                        themeColor: 'primary',
                        label: 'buttonComponent',
                        tooltipText: 'buttonComponent',
                    },
                },
            ],
            columnsCount: 3,
        },
        {
            columnInfo: [
                {
                    index: 0,
                    componentType: 'button',
                    componentInfo: {
                        componentType: 'button',
                        formControlName: 'downloadButtonComponent',
                        type: {
                            name: 'download',
                            icon: 'download',
                        },
                        width: '180',
                        themeColor: 'accent',
                        label: 'downloadButtonComponent',
                        tooltipText: 'downloadButtonComponent',
                        downloadOrExternalNavigateLink: 'https://www.hmousavi.dev/personalPicture.png',
                    },
                },
                {
                    index: 1,
                    componentType: 'button',
                    componentInfo: {
                        componentType: 'button',
                        formControlName: 'linkButtonComponent',
                        type: {
                            name: 'externalLink',
                            icon: 'link',
                        },
                        width: '180',
                        themeColor: 'warn',
                        label: 'linkButtonComponent',
                        tooltipText: 'linkButtonComponent',
                        downloadOrExternalNavigateLink: 'https://hmousavi.dev/',
                    },
                },
            ],
            columnsCount: 2,
        },
    ],
};
