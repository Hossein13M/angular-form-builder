import { Component } from '@angular/core';
import { ColumnModel } from '../../models/column.model';

@Component({
    selector: 'app-setting-modal',
    templateUrl: './setting-modal.component.html',
    styleUrls: ['./setting-modal.component.scss'],
})
export class SettingModalComponent {
    public columns: Array<ColumnModel> = [{ columnId: 1 }];

    public addColumn(): void {
        this.columns.push({ columnId: 1 });
    }

    public removeColumn(column: ColumnModel): void {
        const columnIndex = this.columns.indexOf(column);
        this.columns.splice(columnIndex, 1);
    }

    public checkColumnsCountForLessThanThree(): boolean {
        return this.columns.length < 3;
    }
}
