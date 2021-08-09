import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { InputFormConfiguration } from '#models/inputFormConfiguration.model';

@Component({
    selector: 'app-input-configuration',
    templateUrl: './input-configuration.component.html',
    styleUrls: ['./input-configuration.component.scss'],
})
export class InputConfigurationComponent {
    public themeColors: Array<ThemePalette> = ['primary', 'accent', 'warn'];
    @Output() componentConfiguration: EventEmitter<InputFormConfiguration> = new EventEmitter<InputFormConfiguration>();
    public inputTypes: Array<{ name: string; icon: string }> = [
        { name: 'text', icon: 'article' },
        { name: 'email', icon: 'email' },
        { name: 'tel', icon: 'phone' },
        { name: 'url', icon: 'link' },
        { name: 'numeric', icon: 'pin' },
    ];

    public form: FormGroup = this.fb.group({
        componentType: ['input'],
        formControlName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
        type: ['', Validators.required],
        label: ['', Validators.required],
        placeholder: [],
        isInputTypePassword: [false, Validators.required],
        themeColor: ['primary', Validators.required],
        isRtl: [false, Validators.required],
        hint: [],
    });

    constructor(private fb: FormBuilder) {}

    public submitComponentConfigurationForm() {
        this.componentConfiguration.emit(this.form.value);
    }
}
