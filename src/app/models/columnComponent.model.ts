import { ButtonFormConfiguration } from '#models/buttonFormConfiguration';
import { InputFormConfiguration } from '#models/inputFormConfiguration.model';

export interface ColumnComponentModel {
    index: number;
    componentType: 'button' | 'input';
    componentInfo: ButtonFormConfiguration | InputFormConfiguration;
}
