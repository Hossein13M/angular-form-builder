import { AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface InputFormConfiguration {
    componentType: 'input';
    formControl: FormControl | AbstractControl | null | undefined;
    type: 'text' | 'email' | 'tel' | 'url' | 'numeric';
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
