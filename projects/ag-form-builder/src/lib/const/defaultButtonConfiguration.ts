import { FormControl } from '@angular/forms';
import { ButtonFormConfiguration } from '../models/buttonFormConfiguration';

export const defaultButtonConfiguration: ButtonFormConfiguration = {
    formControlName: new FormControl(),
    componentType: 'button',
    type: { name: 'accept', icon: 'check_circle' },
    themeColor: 'primary',
    label: '',
    width: '180',
    isRtl: false,
    tailwindsClassForLabel: '',
    hasToolTip: false,
    tooltipText: '',
    tooltipPosition: 'left',
    tooltipHideDelay: 0,
    hasIcon: false,
    icon: '',
    localNavigationUrl: '',
    externalLink: '',
};
