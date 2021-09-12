import { InputFormConfiguration } from './inputFormConfiguration.model';
import { ButtonFormConfiguration } from './buttonFormConfiguration';
import { Datepicker } from './datepicker.model';

export interface ColumnModel {
    columnId: number;
    columnComponentType: ComponentTypes;
    columnSetting: ComponentSettings;
}

export type ComponentTypes = 'button' | 'input' | 'date';
export type ComponentSettings = ButtonFormConfiguration | InputFormConfiguration | Datepicker;
