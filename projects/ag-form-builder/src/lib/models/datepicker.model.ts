import { ThemePalette } from '@angular/material/core';

export interface Datepicker {
    componentType: 'datepicker';
    formControlName: string | null;
    appearance: 'outline' | 'fill' | 'legacy' | 'standard';
    label: string;
    datePickerIcon: datePickerIcon;
    themeColor?: ThemePalette;
    popupColor?: ThemePalette;
    errorMessages?: Array<{ errorName: string; errorMessage: string }>;
    isRtl?: boolean;
    hint?: string;
    disableMode: disableMode;
    locale: string; // this should be the correct local like : 'en-US' or 'fa-IR'
}

export type disableMode = 'popup' | 'input' | 'whole' | 'none';
export type datePickerIcon = 'event' | 'calendar_today' | 'today' | 'edit_calendar' | 'calendar_view_month';
