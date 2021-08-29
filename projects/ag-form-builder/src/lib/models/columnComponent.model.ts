import { ButtonFormConfiguration } from './buttonFormConfiguration';
import { InputFormConfiguration } from './inputFormConfiguration.model';

export interface ColumnComponentModel {
    index: number;
    componentType: 'button' | 'input';
    componentInfo: ButtonFormConfiguration | InputFormConfiguration;
}
