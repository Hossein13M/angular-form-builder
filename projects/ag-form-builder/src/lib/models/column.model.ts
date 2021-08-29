import { InputFormConfiguration } from './inputFormConfiguration.model';
import { ButtonFormConfiguration } from './buttonFormConfiguration';

export interface ColumnModel {
    columnId: number;
    columnComponentType: 'button' | 'input';
    columnSetting: ButtonFormConfiguration | InputFormConfiguration;
}
