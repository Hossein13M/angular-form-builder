import { Component } from '@angular/core';
import { Section } from './section.model';
import { MatDialog } from '@angular/material/dialog';
import { SettingModalComponent } from '../../components/setting-modal/setting-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-builder-wrapper',
    templateUrl: './form-builder-wrapper.component.html',
    styleUrls: ['./form-builder-wrapper.component.scss'],
})
export class FormBuilderWrapperComponent {
    public sections: Array<Section> = [];
    public form: FormGroup = this.fb.group({
        name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
    });

    constructor(private dialog: MatDialog, private fb: FormBuilder) {}

    public saveForm(): void {
        console.log(this.sections);
    }

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
            .open(SettingModalComponent, { data: { name: 'hello' }, height: '750px', width: '1600px' })
            .afterClosed()
            .subscribe((result) => console.log(result));
    }

    public submitForm(): void {
        console.log('hello form!');
    }
}
