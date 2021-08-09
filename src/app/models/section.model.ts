import { ButtonFormConfiguration } from './buttonFormConfiguration';
import { InputFormConfiguration } from './inputFormConfiguration.model';

export interface Section {
    columnsCount: number;
    columnInfo?: Array<SectionColumn>;
}

export interface SectionColumn {
    flexNumber: number;
    componentType: 'input' | 'button';
    componentConfiguration: ButtonFormConfiguration | InputFormConfiguration;
}
