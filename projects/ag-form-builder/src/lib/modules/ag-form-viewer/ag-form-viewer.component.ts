import { Component, Input, OnInit } from '@angular/core';
import { AgMockFormDataModel } from '../../models/agMockFormData.model';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
    selector: 'lib-ag-form-viewer',
    templateUrl: './ag-form-viewer.component.html',
    styleUrls: ['./ag-form-viewer.component.scss'],
})
export class AgFormViewerComponent implements OnInit {
    @Input() formInfo!: AgMockFormDataModel;
    public form: FormGroup;
    public formArray: FormArray = this.fb.array([]);
    public hasFormCreated: boolean = false;

    constructor(private readonly fb: FormBuilder) {
        this.form = this.fb.group({ name: ['', Validators.required], formArray: [] });
    }

    public ngOnInit(): void {
        this.createFormGroups();
    }

    get getFormArray(): FormArray {
        return this.form.controls.formArray as FormArray;
    }

    private createFormGroups(): void {
        this.form.get('name')?.setValue(this.formInfo.name);
        this.formInfo.sections.map((sectionInfo) => {
            const formGroup: FormGroup = this.fb.group({});
            sectionInfo?.columnInfo?.map((columnInfo) => {
                formGroup.addControl(columnInfo.componentInfo.formControlName ?? '', new FormControl(null, Validators.required));
            });
            this.formArray.push(formGroup);
        });
        this.form.get('formArray')?.setValue(this.formArray);
        this.hasFormCreated = true;
    }

    public onSubmit(): void {
        this.form.get('formArray')?.value.value.map((item: any) => {
            for (const key in item) {
                if (AgFormViewerComponent.isDate(item[key])) {
                    item[key] = AgFormViewerComponent.convertDateToGregorianFormatForServer(item[key]);
                }
            }
        });

        const dastan = { ...this.form.get('formArray')?.value.value, name: this.form.get('name')?.value };
        console.log(dastan);
    }

    public returnFormGroupControls(formGroup: any) {
        const formControlNames: string[] = [];
        Object.keys(formGroup.controls).map((formControl) => formControlNames.push(formControl));
        return formControlNames;
    }

    public returnFormControlName(index: number, formControlName: string) {
        return this.formInfo?.sections[index]?.columnInfo?.find((item) => {
            return item.componentInfo.formControlName === formControlName;
        });
    }

    public getFormGroup(form: AbstractControl) {
        return form as FormGroup;
    }

    private static convertDateToGregorianFormatForServer(date: Date): string {
        return formatDate(date, 'yyyy-MM-dd', 'en_US');
    }

    private static isDate(dateStr: string): boolean {
        return !isNaN(new Date(dateStr).getDate()) && dateStr !== null;
    }
}
