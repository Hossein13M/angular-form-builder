import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AgColumnComponentModel } from '../../models/agColumnComponent.model';
import { defaultInputConfiguration } from '../../const/defaultInputConfiguration';
import { AgInputFormConfiguration } from '../../models/agInputFormConfiguration.model';
import { AgButtonFormConfiguration } from '../../models/agButtonFormConfiguration';
import { defaultButtonConfiguration } from '../../const/defaultButtonConfiguration';
import { AgSection } from '../../models/agSection.model';
import { defaultDatepickerConfiguration } from '../../const/defaultDatepickerConfiguration';
import { defaultComponentsList } from '../../const/defaultComponentsList';
import { AgColumnModel } from '../../models/agColumn.model';
import { AgComponentSettings, AgComponentTypes } from '../../models/agComponent.model';
import { AgDatepickerConfiguration } from '../../models/agDatepickerConfiguration.model';

@Component({
    selector: 'ag-setting-modal',
    templateUrl: './ag-setting-modal.component.html',
    styleUrls: ['./ag-setting-modal.component.scss'],
})
export class AgSettingModalComponent {
    public columns: Array<AgColumnModel> = [];
    public sectionInfo: { sectionIndex: number; sectionColumns: Array<AgColumnComponentModel> } = {
        sectionIndex: this.data.sectionIndex,
        sectionColumns: [],
    };

    constructor(
        private matDialog: MatDialogRef<AgSettingModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { sectionIndex: number; sectionInfo: AgSection }
    ) {
        if (this.data.sectionInfo.columnsCount > 0) this.setDataForEditMode();
    }

    public addColumn(componentType: AgComponentTypes): void {
        this.columns.push({
            columnId: 1,
            columnComponentType: 'input',
            columnSetting: this.addDefaultComponentConfigurationBasedOnSelectedComponent(componentType),
        });
    }

    private addDefaultComponentConfigurationBasedOnSelectedComponent(componentType: AgComponentTypes): AgComponentSettings {
        const component = defaultComponentsList.find((item) => item.componentType === componentType);
        return component!.defaultComponent;
    }

    public removeColumn(column: AgColumnModel): void {
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

    public getComponentConfigurationEvent(event: any, componentType: AgComponentTypes, columnIndex: number): void {
        this.sectionInfo.sectionColumns[columnIndex] = { index: columnIndex, componentType: componentType, componentInfo: event };
    }

    private setDataForEditMode(): void {
        this.columns = [];
        this.data.sectionInfo.columnInfo!.map((item) => {
            this.columns.push({ columnId: item.index, columnComponentType: item.componentType, columnSetting: item.componentInfo });
            this.sectionInfo.sectionColumns.push({ index: item.index, componentInfo: item.componentInfo, componentType: item.componentType });
        });
    }

    public returnInputFormConfiguration(sectionColumn: AgColumnModel): AgInputFormConfiguration {
        return this.columns.length > 0 ? <AgInputFormConfiguration>sectionColumn.columnSetting : defaultInputConfiguration;
    }

    public returnButtonFormConfiguration(sectionColumn: AgColumnModel): AgButtonFormConfiguration {
        return this.columns.length > 0 ? <AgButtonFormConfiguration>sectionColumn.columnSetting : defaultButtonConfiguration;
    }

    public returnDatepickerFormConfiguration(sectionColumn: AgColumnModel): AgDatepickerConfiguration {
        return this.columns.length > 0 ? <AgDatepickerConfiguration>sectionColumn.columnSetting : defaultDatepickerConfiguration;
    }

    public onComponentTypeValueChange(column: AgColumnModel, selectedColumnComponentType: AgComponentTypes) {
        const columnIndex = this.columns.indexOf(column);
        this.columns[columnIndex] = {
            columnSetting: this.addDefaultComponentConfigurationBasedOnSelectedComponent(selectedColumnComponentType),
            columnId: this.columns[columnIndex].columnId,
            columnComponentType: selectedColumnComponentType,
        };
    }
}
