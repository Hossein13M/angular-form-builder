import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ColumnModel } from '#models/column.model';
import { ColumnComponentModel } from '#models/columnComponent.model';
import { Section } from '#models/section.model';
import { defaultInputConfiguration } from '../../const/defaultInputConfiguration';
import { InputFormConfiguration } from '#models/inputFormConfiguration.model';
import { ButtonFormConfiguration } from '#models/buttonFormConfiguration';
import { defaultButtonConfiguration } from '../../const/defaultButtonConfiguration';

@Component({
    selector: 'app-setting-modal',
    templateUrl: './setting-modal.component.html',
    styleUrls: ['./setting-modal.component.scss'],
})
export class SettingModalComponent {
    public defaultButton = defaultButtonConfiguration;
    public defaultInput = defaultInputConfiguration;

    public columns: Array<ColumnModel> = [];
    public sectionInfo: { sectionIndex: number; sectionColumns: Array<ColumnComponentModel> } = {
        sectionIndex: this.data.sectionIndex,
        sectionColumns: [],
    };

    constructor(private matDialog: MatDialogRef<SettingModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { sectionIndex: number; sectionInfo: Section }) {
        if (this.data.sectionInfo.columnsCount > 0) this.setDataForEditMode();
    }

    public addColumn(): void {
        this.columns.push({ columnId: 1, columnComponentType: 'input', columnSetting: defaultInputConfiguration });
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
        console.log(event);
        if (this.sectionInfo.sectionColumns.length < columnIndex + 1) {
            this.sectionInfo.sectionColumns.push({ index: columnIndex, componentType: componentType, componentInfo: event });
        } else {
            this.sectionInfo.sectionColumns[columnIndex] = { index: columnIndex, componentType: componentType, componentInfo: event };
        }
    }

    private setDataForEditMode() {
        this.columns = [];
        this.data.sectionInfo.columnInfo!.map((item) => {
            this.columns.push({ columnId: item.index, columnComponentType: item.componentType, columnSetting: item.componentInfo });
        });
    }

    public returnInputFormConfiguration(sectionColumn: ColumnModel): InputFormConfiguration {
        return this.columns.length > 0 ? <InputFormConfiguration>sectionColumn.columnSetting : defaultInputConfiguration;
    }

    public returnButtonFormConfiguration(sectionColumn: ColumnModel): ButtonFormConfiguration {
        return <ButtonFormConfiguration>sectionColumn.columnSetting;
    }
}
