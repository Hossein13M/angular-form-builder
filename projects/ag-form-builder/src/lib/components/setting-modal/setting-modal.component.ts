import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ColumnComponentModel } from '../../models/columnComponent.model';
import { defaultInputConfiguration } from '../../const/defaultInputConfiguration';
import { InputFormConfiguration } from '../../models/inputFormConfiguration.model';
import { ButtonFormConfiguration } from '../../models/buttonFormConfiguration';
import { defaultButtonConfiguration } from '../../const/defaultButtonConfiguration';
import { ColumnModel, ComponentSettings, ComponentTypes } from '../../models/column.model';
import { Section } from '../../models/section.model';
import { Datepicker } from '../../models/datepicker.model';
import { defaultDatepickerConfiguration } from '../../const/defaultDatepickerConfiguration';
import { defaultComponentsList } from '../../const/defaultComponentsList';

@Component({
    selector: 'app-setting-modal',
    templateUrl: './setting-modal.component.html',
    styleUrls: ['./setting-modal.component.scss'],
})
export class SettingModalComponent {
    public columns: Array<ColumnModel> = [];
    public sectionInfo: { sectionIndex: number; sectionColumns: Array<ColumnComponentModel> } = {
        sectionIndex: this.data.sectionIndex,
        sectionColumns: [],
    };

    constructor(private matDialog: MatDialogRef<SettingModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { sectionIndex: number; sectionInfo: Section }) {
        if (this.data.sectionInfo.columnsCount > 0) this.setDataForEditMode();
    }

    public addColumn(componentType: ComponentTypes): void {
        this.columns.push({
            columnId: 1,
            columnComponentType: 'input',
            columnSetting: this.addDefaultComponentConfigurationBasedOnSelectedComponent(componentType),
        });
    }

    private addDefaultComponentConfigurationBasedOnSelectedComponent(componentType: ComponentTypes): ComponentSettings {
        const component = defaultComponentsList.find((item) => item.componentType === componentType);
        return component!.defaultComponent;
    }

    public removeColumn(column: ColumnModel): void {
        const columnIndex = this.columns.indexOf(column);
        this.columns.splice(columnIndex, 1);
        this.sectionInfo.sectionColumns.splice(columnIndex, 1);
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

    public getComponentConfigurationEvent(event: any, componentType: ComponentTypes, columnIndex: number): void {
        this.sectionInfo.sectionColumns[columnIndex] = { index: columnIndex, componentType: componentType, componentInfo: event };
    }

    private setDataForEditMode(): void {
        this.columns = [];
        this.data.sectionInfo.columnInfo!.map((item) => {
            this.columns.push({ columnId: item.index, columnComponentType: item.componentType, columnSetting: item.componentInfo });
            this.sectionInfo.sectionColumns.push({ index: item.index, componentInfo: item.componentInfo, componentType: item.componentType });
        });
    }

    public returnInputFormConfiguration(sectionColumn: ColumnModel): InputFormConfiguration {
        return this.columns.length > 0 ? <InputFormConfiguration>sectionColumn.columnSetting : defaultInputConfiguration;
    }

    public returnButtonFormConfiguration(sectionColumn: ColumnModel): ButtonFormConfiguration {
        return this.columns.length > 0 ? <ButtonFormConfiguration>sectionColumn.columnSetting : defaultButtonConfiguration;
    }

    public returnDatepickerFormConfiguration(sectionColumn: ColumnModel): Datepicker {
        return this.columns.length > 0 ? <Datepicker>sectionColumn.columnSetting : defaultDatepickerConfiguration;
    }

    public onComponentTypeValueChange(column: ColumnModel, selectedColumnComponentType: ComponentTypes) {
        const columnIndex = this.columns.indexOf(column);
        this.columns[columnIndex] = {
            columnSetting: this.addDefaultComponentConfigurationBasedOnSelectedComponent(selectedColumnComponentType),
            columnId: this.columns[columnIndex].columnId,
            columnComponentType: selectedColumnComponentType,
        };
    }
}
