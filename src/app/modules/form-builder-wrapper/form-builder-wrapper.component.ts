import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Section } from '#models/section.model';
import { SettingModalComponent } from '../setting-modal/setting-modal.component';

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

    public openSettingDialog(): void {
        this.dialog
            .open(SettingModalComponent, { data: { name: 'hello' }, height: '800px', width: '1600px' })
            .afterClosed()
            .subscribe((result) => result && this.createSectionPreview());
    }

    public submitForm(): void {
        console.log('hello form!');
    }

    private createSectionPreview(): void {
        // TODO: will be developed later
    }
}
