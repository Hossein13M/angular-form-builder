import { Component, Input, OnInit } from '@angular/core';
import { AgDatepicker } from '../../models/agDatepicker.model';
import { DateAdapter } from '@angular/material/core';

@Component({
    selector: 'lib-ag-date-picker',
    templateUrl: './ag-date-picker.component.html',
    styleUrls: ['./ag-date-picker.component.scss'],
})
export class AgDatePickerComponent implements OnInit {
    @Input() datePickerConfiguration!: AgDatepicker;

    constructor(private dateAdapter: DateAdapter<any>) {}

    ngOnInit(): void {
        this.setLocale();
    }

    private setLocale() {
        this.dateAdapter.setLocale(this.datePickerConfiguration.locale);
    }
}
