import { AbstractControl, FormControl } from '@angular/forms';

export interface ButtonFormConfiguration {
    formControl: string | AbstractControl | FormControl | null | undefined;
    componentType: 'button';
    type: 'accept' | 'reject' | 'upload' | 'download' | 'localRoute' | 'externalLink';
    themeColor: 'primary' | 'accent' | 'warn';
    label: string;
    width: string;
    isRtl?: boolean;
    tailwindsClassForLabel?: string;
    hasToolTip: boolean;
    tooltipText?: string;
    tooltipPosition?: 'left' | 'right' | 'above' | 'below' | 'before' | 'after';
    tooltipHideDelay?: number;
    hasIcon: boolean;
    icon?: string;
    localNavigationUrl?: string;
    externalLink?: string;
}
