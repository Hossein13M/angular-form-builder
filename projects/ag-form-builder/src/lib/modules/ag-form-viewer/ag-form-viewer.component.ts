import { Component, OnInit } from '@angular/core';
import { AgFormViewerService } from './ag-form-viewer.service';
import { MockFormDataModel } from '../../models/mockFormData.model';
import { Datepicker } from '../../models/datepicker.model';
import { defaultDatepickerConfiguration } from '../../const/defaultDatepickerConfiguration';

@Component({
    selector: 'lib-ag-form-viewer',
    templateUrl: './ag-form-viewer.component.html',
    styleUrls: ['./ag-form-viewer.component.scss'],
})
export class AgFormViewerComponent implements OnInit {
    public mockForm!: MockFormDataModel;
    public defaultDatePicker: Datepicker = defaultDatepickerConfiguration;
    constructor(private readonly agFormViewerService: AgFormViewerService) {}

    ngOnInit(): void {
        this.agFormViewerService.getMockData().subscribe((result) => {
            this.mockForm = result;
            console.log(result);
        });
    }
}
