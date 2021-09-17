import { Component, Input } from '@angular/core';
import { AgDatepickerConfiguration } from '../../models/agDatepickerConfiguration.model';

@Component({
    selector: 'ag-date-picker',
    templateUrl: './ag-date-picker.component.html',
    styleUrls: ['./ag-date-picker.component.scss'],
})
export class AgDatePickerComponent {
    @Input() datePickerConfiguration!: AgDatepickerConfiguration;

    constructor() {}
}
