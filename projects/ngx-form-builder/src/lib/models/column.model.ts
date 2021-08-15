import { ButtonFormConfiguration } from '#models/buttonFormConfiguration';
import { InputFormConfiguration } from '#models/inputFormConfiguration.model';

export interface ColumnModel {
    columnId: number;
    columnComponentType: 'button' | 'input';
    columnSetting: ButtonFormConfiguration | InputFormConfiguration;
}
