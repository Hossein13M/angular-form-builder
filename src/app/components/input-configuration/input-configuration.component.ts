import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    @Input() inputConfiguration!: any;

    public inputTypes: Array<{ name: string; icon: string }> = [
        { name: 'text', icon: 'article' },
        { name: 'email', icon: 'email' },
        { name: 'tel', icon: 'phone' },
        { name: 'url', icon: 'link' },
        { name: 'numeric', icon: 'pin' },
    ];

    public form: FormGroup = this.fb.group({
        componentType: ['input'],
        formControl: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
        type: ['', Validators.required],
        label: ['', Validators.required],
        placeholder: [''],
        isInputTypePassword: [false, Validators.required],
        themeColor: ['primary', Validators.required],
        isRtl: [false, Validators.required],
        hint: [''],
    });

    constructor(private fb: FormBuilder) {
        console.log('received data from the parent component', this.inputConfiguration);
        if (this.inputConfiguration) this.setFormValue();
    }

    public submitComponentConfigurationForm() {
        const data: InputFormConfiguration = this.form.value;
        data.formControl = this.fb.control([data.formControl]);
        this.componentConfiguration.emit(data);
    }

    private setFormValue(): void {
        this.form.get('componentType')?.setValue(this.inputConfiguration.componentType);
        this.form.get('formControl')?.setValue(this.inputConfiguration.formControl);
        this.form.get('type')?.setValue(this.inputConfiguration.type);
        this.form.get('label')?.setValue(this.inputConfiguration.label);
        this.form.get('placeholder')?.setValue(this.inputConfiguration.placeholder);
        this.form.get('isInputTypePassword')?.setValue(this.inputConfiguration.isInputTypePassword);
        this.form.get('themeColor')?.setValue(this.inputConfiguration.themeColor);
        this.form.get('isRtl')?.setValue(this.inputConfiguration.isRtl);
        this.form.get('hint')?.setValue(this.inputConfiguration.hint);
    }
}
