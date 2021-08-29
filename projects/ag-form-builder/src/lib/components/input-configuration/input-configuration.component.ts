import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { InputFormConfiguration } from '../../models/inputFormConfiguration.model';

@Component({
    selector: 'app-input-configuration',
    templateUrl: './input-configuration.component.html',
    styleUrls: ['./input-configuration.component.scss'],
})
export class InputConfigurationComponent implements OnInit {
    public themeColors: Array<ThemePalette> = ['primary', 'accent', 'warn'];
    @Output() componentConfiguration: EventEmitter<InputFormConfiguration> = new EventEmitter<InputFormConfiguration>();
    @Input() inputConfiguration!: InputFormConfiguration;

    public inputTypes: Array<{ name: string; icon: string }> = [
        { name: 'text', icon: 'article' },
        { name: 'email', icon: 'email' },
        { name: 'tel', icon: 'phone' },
        { name: 'url', icon: 'link' },
        { name: 'numeric', icon: 'pin' },
    ];

    public form: FormGroup = this.fb.group({
        componentType: ['input'],
        formControl: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
        type: [null, Validators.required],
        label: ['', Validators.required],
        placeholder: [''],
        isInputTypePassword: [false, Validators.required],
        themeColor: ['primary', Validators.required],
        isRtl: [false, Validators.required],
        hint: [''],
    });

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.setFormValue();
    }

    public submitComponentConfigurationForm() {
        const data: InputFormConfiguration = this.form.value;
        data.formControl = new FormControl(this.form.value.formControl);
        this.componentConfiguration.emit(data);
    }

    private setFormValue(): void {
        this.form.get('componentType')?.setValue(this.inputConfiguration.componentType);
        this.form.get('formControl')?.setValue(this.inputConfiguration.formControl!.value);
        this.form.get('label')?.setValue(this.inputConfiguration.label);
        this.form.get('placeholder')?.setValue(this.inputConfiguration.placeholder);
        this.form.get('isInputTypePassword')?.setValue(this.inputConfiguration.isInputTypePassword);
        this.form.get('themeColor')?.setValue(this.inputConfiguration.themeColor);
        this.form.get('isRtl')?.setValue(this.inputConfiguration.isRtl);
        this.form.get('hint')?.setValue(this.inputConfiguration.hint);
        this.inputTypes.map((inputType) => inputType.name === this.inputConfiguration.type.name && this.form.get('type')?.setValue(inputType));
    }
}
