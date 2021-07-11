import { ButtonModel } from '../../components/button/button.model';
import { InputFormConfiguration } from '../../components/input/input.model';

export interface Section {
    columnsCount: number;
    columnInfo?: Array<SectionColumn>;
}

export interface SectionColumn {
    flexNumber: number;
    componentType: 'input' | 'button';
    componentConfiguration: ButtonModel | InputFormConfiguration;
}
