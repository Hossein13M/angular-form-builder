import { AgColumnComponentModel } from './agColumnComponent.model';

export interface AgSection {
    columnsCount: number;
    columnInfo?: Array<AgColumnComponentModel>;
}
