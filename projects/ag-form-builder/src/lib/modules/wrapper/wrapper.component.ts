import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SettingModalComponent } from '../setting-modal/setting-modal.component';
import { ColumnComponentModel } from '../../models/columnComponent.model';
import { Section } from '../../models/section.model';

@Component({
    selector: 'lib-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
    @Output() emittedFormInfo: EventEmitter<{ name: string; section: Array<Section> }> = new EventEmitter<{ name: string; section: Array<Section> }>();
    public sections: Array<Section> = [];
    public form: FormGroup = this.fb.group({
        name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
    });

    constructor(private dialog: MatDialog, private fb: FormBuilder) {}

    public clearForm(): void {
        this.sections = [];
        this.form.reset();
    }

    public addSection(): void {
        this.sections.push({ columnsCount: 0 });
    }

    public removeSection(section: Section): void {
        const sectionIndex = this.sections.indexOf(section);
        this.sections.splice(sectionIndex, 1);
    }

    public openSettingDialog(sectionIndex: number, sectionInfo: Section): void {
        this.dialog
            .open(SettingModalComponent, { data: { sectionIndex, sectionInfo }, height: '800px', width: '1600px' })
            .afterClosed()
            .subscribe((sectionInfo: { sectionIndex: number; sectionColumns: Array<ColumnComponentModel> }) => {
                sectionInfo && this.createSectionPreview(sectionInfo);
            });
    }

    public submitForm(): void {
        const data = { ...this.form.value, sections: this.sections };
        this.emittedFormInfo.emit(data);
    }

    public isSubmitButtonDisable(): boolean {
        return this.form.valid && !!this.sections.length;
    }

    private createSectionPreview(sectionInfo: { sectionIndex: number; sectionColumns: Array<ColumnComponentModel> }): void {
        this.sections[sectionInfo.sectionIndex] = {
            columnInfo: sectionInfo.sectionColumns,
            columnsCount: sectionInfo.sectionColumns.length,
        };
    }
}
