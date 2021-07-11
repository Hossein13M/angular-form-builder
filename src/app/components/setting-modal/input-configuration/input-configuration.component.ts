import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'app-input-configuration',
    templateUrl: './input-configuration.component.html',
    styleUrls: ['./input-configuration.component.scss'],
})
export class InputConfigurationComponent {
    public themeColors: Array<ThemePalette> = ['primary', 'accent', 'warn'];

    public form: FormGroup = this.fb.group({
        type: ['text', Validators.required],
        label: ['', Validators.required],
        placeholder: [],
        isInputTypePassword: [false, Validators.required],
        themeColor: ['primary', Validators.required],
        isRtl: [false, Validators.required],
        hint: [],
    });

    constructor(private fb: FormBuilder) {}

    public submitForm() {
        console.log(this.form.value);
    }
}
