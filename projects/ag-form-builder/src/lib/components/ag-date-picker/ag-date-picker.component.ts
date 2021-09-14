import { Component, Input, OnInit } from '@angular/core';
import { AgDatepickerConfiguration } from '../../models/agDatepickerConfiguration.model';
import { DateAdapter } from '@angular/material/core';

@Component({
    selector: 'ag-date-picker',
    templateUrl: './ag-date-picker.component.html',
    styleUrls: ['./ag-date-picker.component.scss'],
})
export class AgDatePickerComponent implements OnInit {
    @Input() datePickerConfiguration!: AgDatepickerConfiguration;

    constructor(private dateAdapter: DateAdapter<any>) {}

    ngOnInit(): void {
        this.setLocale();
    }

    private setLocale() {
        this.dateAdapter.setLocale(this.datePickerConfiguration.locale);
    }
}
