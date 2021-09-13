import { Component, Input, OnInit } from '@angular/core';
import { AgMockFormDataModel } from '../../models/agMockFormData.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgColumnComponentModel } from '../../models/agColumnComponent.model';
import { AgButtonFormConfiguration } from '../../models/agButtonFormConfiguration';
import { AgInputFormConfiguration } from '../../models/agInputFormConfiguration.model';
import { AgDatepickerConfiguration } from '../../models/agDatepickerConfiguration.model';

@Component({
    selector: 'lib-ag-form-viewer',
    templateUrl: './ag-form-viewer.component.html',
    styleUrls: ['./ag-form-viewer.component.scss'],
})
export class AgFormViewerComponent implements OnInit {
    @Input() formInfo!: AgMockFormDataModel;
    public form: FormGroup = this.fb.group({
        name: ['', Validators.required],
        formArray: this.fb.array([]),
    });
    public formArray: FormArray = this.fb.array([]);

    constructor(private readonly fb: FormBuilder) {}

    private createFormGroups(): void {
        const dastan: any[] = [];
        this.form.get('name')?.setValue(this.formInfo.name);
        this.formInfo.sections.map((sectionInfo) => {
            let fg: FormGroup = this.fb.group({});
            sectionInfo?.columnInfo?.map((columnInfo) => {
                fg.addControl(`${columnInfo.componentInfo.formControlName}`, new FormControl('dastan', Validators.required));
            });
            dastan.push(fg);
        });
        this.form.get('formArray')?.setValue(dastan);
        console.log(this.formArray);
    }

    public ngOnInit(): void {
        this.createFormGroups();
    }

    public onSubmit(): void {}

    public returnButtonComponentConfiguration(component: AgColumnComponentModel): AgButtonFormConfiguration {
        return <AgButtonFormConfiguration>component.componentInfo;
    }

    public returnInputComponentConfiguration(component: AgColumnComponentModel): AgInputFormConfiguration {
        return <AgInputFormConfiguration>component.componentInfo;
    }

    public returnDatepickerComponentConfiguration(component: AgColumnComponentModel): AgDatepickerConfiguration {
        return <AgDatepickerConfiguration>component.componentInfo;
    }
}
