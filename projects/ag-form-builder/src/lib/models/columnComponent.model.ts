import { ButtonFormConfiguration } from './buttonFormConfiguration';
import { InputFormConfiguration } from './inputFormConfiguration.model';
import { ComponentTypes } from './column.model';
import { Datepicker } from './datepicker.model';

export interface ColumnComponentModel {
    index: number;
    componentType: ComponentTypes;
    componentInfo: ButtonFormConfiguration | InputFormConfiguration | Datepicker;
}
