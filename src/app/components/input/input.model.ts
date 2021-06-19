import { AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface InputFormConfiguration {
    formControl: FormControl | AbstractControl | null | undefined;
    type: 'text' | 'email' | 'tel' | 'url' | 'number' | 'textarea';
    label: string;
    placeholder?: string;
    isInputTypePassword?: boolean;
    color?: ThemePalette;
    errorMessages?: Array<{ errorName: string; errorMessage: string }>;
    isRtl?: boolean;
    autofocus?: boolean;
    readonly?: boolean;
    hint?: string;
}
