import { AgButtonFormConfiguration } from '../models/agButtonFormConfiguration';

export const defaultButtonConfiguration: AgButtonFormConfiguration = {
    formControlName: '',
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
