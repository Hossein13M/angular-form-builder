import { ButtonConfiguration } from '../../components/button/buttonConfiguration';
import { InputFormConfiguration } from '../../components/input/input.model';

export interface Section {
    columnsCount: number;
    columnInfo?: Array<SectionColumn>;
}

export interface SectionColumn {
    flexNumber: number;
    componentType: 'input' | 'button';
    componentConfiguration: ButtonConfiguration | InputFormConfiguration;
}
