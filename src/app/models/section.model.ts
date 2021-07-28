import { ButtonModel } from './button.model';
import { InputFormConfiguration } from './input.model';

export interface Section {
    columnsCount: number;
    columnInfo?: Array<SectionColumn>;
}

export interface SectionColumn {
    flexNumber: number;
    componentType: 'input' | 'button';
    componentConfiguration: ButtonModel | InputFormConfiguration;
}
