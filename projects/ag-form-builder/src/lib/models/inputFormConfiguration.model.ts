import { ThemePalette } from '@angular/material/core';

export interface InputFormConfiguration {
    componentType: 'input';
    formControlName: string | null;
    type: { name: 'text' | 'email' | 'tel' | 'url' | 'numeric'; icon: string };
    label: string;
    placeholder?: string;
    isInputTypePassword?: boolean;
    themeColor?: ThemePalette;
    errorMessages?: Array<{ errorName: string; errorMessage: string }>;
    isRtl?: boolean;
    autofocus?: boolean;
    readonly?: boolean;
    hint?: string;
}
