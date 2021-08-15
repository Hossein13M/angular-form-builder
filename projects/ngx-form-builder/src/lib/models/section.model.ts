import { ColumnComponentModel } from '#models/columnComponent.model';

export interface Section {
    columnsCount: number;
    columnInfo?: Array<ColumnComponentModel>;
}
