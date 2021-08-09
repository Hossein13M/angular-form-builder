import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Section } from '#models/section.model';
import { SettingModalComponent } from '../setting-modal/setting-modal.component';
import { ColumnComponentModel } from '#models/columnComponent.model';

@Component({
    selector: 'app-form-builder-wrapper',
    templateUrl: './form-builder-wrapper.component.html',
    styleUrls: ['./form-builder-wrapper.component.scss'],
})
export class FormBuilderWrapperComponent {
    public sections: Array<Section> = [{ columnsCount: 1 }];
    public form: FormGroup = this.fb.group({
        name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
    });

    constructor(private dialog: MatDialog, private fb: FormBuilder) {}

    public clearForm(): void {
        this.sections = [];
    }

    public addSection(): void {
        this.sections.push({ columnsCount: 1 });
    }

    public removeSection(section: Section): void {
        const sectionIndex = this.sections.indexOf(section);
        this.sections.splice(sectionIndex, 1);
    }

    public openSettingDialog(sectionIndex: number): void {
        this.dialog
            .open(SettingModalComponent, { data: { sectionIndex: sectionIndex }, height: '800px', width: '1600px' })
            .afterClosed()
            .subscribe(
                (sectionInfo: { sectionIndex: number; sectionColumns: Array<ColumnComponentModel> }) => sectionInfo && this.createSectionPreview(sectionInfo)
            );
    }

    public submitForm(): void {
        console.log(this.sections);
    }

    private createSectionPreview(sectionInfo: { sectionIndex: number; sectionColumns: Array<ColumnComponentModel> }): void {
        this.sections[sectionInfo.sectionIndex] = {
            columnInfo: sectionInfo.sectionColumns,
            columnsCount: sectionInfo.sectionColumns.length,
        };
    }
}
