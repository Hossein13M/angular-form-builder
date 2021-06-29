import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'app-button-configuration',
    templateUrl: './button-configuration.component.html',
    styleUrls: ['./button-configuration.component.scss'],
})
export class ButtonConfigurationComponent {
    public form: FormGroup = this.fb.group({
        type: ['', Validators.required],
        themeColor: ['primary', Validators.required],
        label: ['', Validators.required],
        isRtl: [false, Validators.required],
        hasToolTip: ['', Validators.required],
        tooltipText: ['', Validators.required],
    });
    public themeColors: Array<ThemePalette> = ['primary', 'accent', 'warn'];

    constructor(private fb: FormBuilder) {}

    public submitForm(): void {
        console.log(this.form);
    }
}
