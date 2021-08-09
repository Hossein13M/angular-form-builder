import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ColumnModel } from '#models/column.model';
import { ColumnComponentModel } from '#models/columnComponent.model';

@Component({
    selector: 'app-setting-modal',
    templateUrl: './setting-modal.component.html',
    styleUrls: ['./setting-modal.component.scss'],
})
export class SettingModalComponent {
    public columns: Array<ColumnModel> = [{ columnId: 1 }];
    public sectionInfo: { sectionIndex: number; sectionColumns: Array<ColumnComponentModel> } = {
        sectionIndex: this.data.sectionIndex,
        sectionColumns: [],
    };

    constructor(private matDialog: MatDialogRef<SettingModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { sectionIndex: number }) {}

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
        this.matDialog.close(this.sectionInfo);
    }

    public getComponentConfigurationEvent(event: any, componentType: 'button' | 'input', columnIndex: number) {
        if (this.sectionInfo.sectionColumns.length < columnIndex + 1) {
            this.sectionInfo.sectionColumns.push({ index: columnIndex, componentType: componentType, componentInfo: event });
        } else {
            this.sectionInfo.sectionColumns[columnIndex] = { index: columnIndex, componentType: componentType, componentInfo: event };
        }
    }
}
