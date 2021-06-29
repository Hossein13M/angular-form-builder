export interface ButtonConfiguration {
    type: 'accept' | 'reject' | 'upload' | 'download' | 'localRoute' | 'externalLink';
    themeColor: 'primary' | 'accent' | 'warn';
    label: string;
    isRtl?: boolean;
    tailwindsClassForLabel?: string;
    hasToolTip: boolean;
    tooltipText?: string;
    tooltipPosition?: 'left' | 'right' | 'above' | 'below' | 'before' | 'after';
    tooltipHideDelay?: number;
    hasIcon: boolean;
    icon?: string;
    navLink?: string;
    localNavigationUrl?: string;
    externalLink?: string;
}
