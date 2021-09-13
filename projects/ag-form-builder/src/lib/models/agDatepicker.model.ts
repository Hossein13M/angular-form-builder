import { ThemePalette } from '@angular/material/core';

export interface AgDatepicker {
    componentType: 'datepicker';
    formControlName: string | null;
    appearance: AgAppearance;
    label: string;
    datePickerIcon: AgDatePickerIcon;
    themeColor?: ThemePalette;
    popupColor?: ThemePalette;
    errorMessages?: Array<{ errorName: string; errorMessage: string }>;
    isRtl?: boolean;
    hint?: string;
    disableMode: AgDisableMode;
    locale: string; // this should be the correct local like : 'en-US' or 'fa-IR'
}

export type AgDisableMode = 'popup' | 'input' | 'whole' | 'none';
export type AgDatePickerIcon = 'event' | 'calendar_today' | 'today' | 'edit_calendar' | 'calendar_view_month';
export type AgAppearance = 'outline' | 'fill' | 'legacy' | 'standard';
