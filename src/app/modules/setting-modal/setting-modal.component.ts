import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ColumnModel } from '#models/column.model';
import { ColumnComponentModel } from '#models/columnComponent.model';

@Component({
    selector: 'app-setting-modal',
    templateUrl: './setting-modal.component.html',
    styleUrls: ['./setting-modal.component.scss'],
})
export class SettingModalComponent {
    public columns: Array<ColumnModel> = [{ columnId: 1 }];
    public columnComponents: Array<ColumnComponentModel> = [];

    constructor(private matDialog: MatDialogRef<SettingModalComponent>) {}

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

    public discardSectionSettings(): void {
        this.matDialog.close(false);
    }

    public saveSectionSettings(): void {
        this.matDialog.close(this.columnComponents);
    }

    public getComponentConfigurationEvent(event: any, componentType: 'button' | 'input', columnIndex: number) {
        console.log(event, componentType, columnIndex);
        this.columnComponents.push({ index: columnIndex, componentType: componentType, componentInfo: event });
    }
}
