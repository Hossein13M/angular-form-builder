import { ThemePalette } from '@angular/material/core';

export interface Datepicker {
    componentType: 'datepicker';
    formControlName: string | null;
    appearance: Appearance;
    label: string;
    datePickerIcon: DatePickerIcon;
    themeColor?: ThemePalette;
    popupColor?: ThemePalette;
    errorMessages?: Array<{ errorName: string; errorMessage: string }>;
    isRtl?: boolean;
    hint?: string;
    disableMode: DisableMode;
    locale: string; // this should be the correct local like : 'en-US' or 'fa-IR'
}

export type DisableMode = 'popup' | 'input' | 'whole' | 'none';
export type DatePickerIcon = 'event' | 'calendar_today' | 'today' | 'edit_calendar' | 'calendar_view_month';
export type Appearance = 'outline' | 'fill' | 'legacy' | 'standard';
