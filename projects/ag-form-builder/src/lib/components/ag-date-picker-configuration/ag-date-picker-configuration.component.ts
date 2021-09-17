import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgAppearance, AgDatepickerConfiguration, AgDatePickerIcon, AgDisableMode } from '../../models/agDatepickerConfiguration.model';

@Component({
    selector: 'ag-date-picker-configuration',
    templateUrl: './ag-date-picker-configuration.component.html',
    styleUrls: ['./ag-date-picker-configuration.component.scss'],
})
export class AgDatePickerConfigurationComponent implements OnInit {
    public themeColors: Array<ThemePalette> = ['primary', 'accent', 'warn'];
    public appearances: Array<AgAppearance> = ['outline', 'legacy', 'standard', 'fill'];
    public disableModes: Array<{ name: AgDisableMode; icon: string }> = [
        { name: 'popup', icon: 'open_in_new_off' },
        { name: 'input', icon: 'power_input' },
        { name: 'none', icon: 'check_box_outline_blank' },
        { name: 'whole', icon: 'event' },
    ];
    public datePickerIcons: Array<AgDatePickerIcon> = ['event', 'calendar_today', 'today', 'edit_calendar', 'calendar_view_month'];
    public datePickerLocales: Array<{ localeCode: string; localeName: string }> = [
        { localeCode: 'fa-IR', localeName: 'Iranian Calendar' },
        { localeCode: 'en-US', localeName: 'Gregorian Calendar' },
    ];
    @Output() componentConfiguration: EventEmitter<AgDatepickerConfiguration> = new EventEmitter<AgDatepickerConfiguration>();
    @Input() datepickerConfiguration!: AgDatepickerConfiguration;

    public form: FormGroup = this.fb.group({
        formControlName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
        label: ['', Validators.required],
        componentType: ['datepicker'],
        datePickerIcon: ['', Validators.required],
        themeColor: ['primary', Validators.required],
        popupColor: ['', Validators.required],
        locale: [Validators.required],
        disableMode: ['input', Validators.required],
        hint: [''],
        appearance: ['outline', Validators.required],
    });

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.setDataForEditMode();
    }

    public submitComponentConfigurationForm(): void {
        const data: AgDatepickerConfiguration = this.form.value;
        this.componentConfiguration.emit(data);
    }

    private setDataForEditMode() {
        this.form.get('componentType')?.setValue(this.datepickerConfiguration.componentType);
        this.form.get('formControlName')?.setValue(this.datepickerConfiguration.formControlName);
        this.form.get('appearance')?.setValue(this.datepickerConfiguration.appearance);
        this.form.get('label')?.setValue(this.datepickerConfiguration.label);
        this.form.get('themeColor')?.setValue(this.datepickerConfiguration.themeColor);
        this.form.get('locale')?.setValue(this.datepickerConfiguration.locale);
        this.form.get('disableMode')?.setValue(this.datepickerConfiguration.disableMode);
        this.form.get('popupColor')?.setValue(this.datepickerConfiguration.popupColor);
        this.form.get('datePickerIcon')?.setValue(this.datepickerConfiguration.datePickerIcon);
    }

    public setLocaleName(localeCode: string): string {
        return this.datePickerLocales.find((item) => item.localeCode === localeCode)!.localeName;
    }

    public findDisableModeIcon(mode: AgDisableMode): string {
        return this.disableModes.find((item) => item.name === mode)!.icon;
    }
}
