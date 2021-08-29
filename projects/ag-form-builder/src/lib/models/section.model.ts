import { ColumnComponentModel } from './columnComponent.model';

export interface Section {
    columnsCount: number;
    columnInfo?: Array<ColumnComponentModel>;
}
