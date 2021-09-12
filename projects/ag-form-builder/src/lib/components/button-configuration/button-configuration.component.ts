import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonFormConfiguration } from '../../models/buttonFormConfiguration';

@Component({
    selector: 'app-button-configuration',
    templateUrl: './button-configuration.component.html',
    styleUrls: ['./button-configuration.component.scss'],
})
export class ButtonConfigurationComponent implements OnInit {
    public themeColors: Array<ThemePalette> = ['primary', 'accent', 'warn'];
    @Output() componentConfiguration: EventEmitter<ButtonFormConfiguration> = new EventEmitter<ButtonFormConfiguration>();
    @Input() buttonConfiguration!: ButtonFormConfiguration;

    public buttonTypes: Array<{ name: string; icon: string }> = [
        { name: 'accept', icon: 'check_circle' },
        { name: 'reject', icon: 'cancel' },
        { name: 'upload', icon: 'upload' },
        { name: 'download', icon: 'download' },
        { name: 'local Route', icon: 'alt_route' },
        { name: 'externalLink', icon: 'link' },
    ];

    public form: FormGroup = this.fb.group({
        componentType: [''],
        formControlName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
        type: ['', Validators.required],
        width: ['', Validators.required],
        themeColor: ['primary', Validators.required],
        label: ['', Validators.required],
        tooltipText: [''],
    });

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form.get('type')!.valueChanges.subscribe((value) => {
            value.name === 'download' || value.name === 'externalLink'
                ? this.form.addControl('downloadOrExternalNavigateLink', new FormControl('', Validators.required))
                : !this.form.get('downloadOrExternalNavigateLink') && this.form.removeControl('downloadOrExternalNavigateLink');
        });
        this.setDataForEditMode();
    }

    public submitComponentConfigurationForm(): void {
        const data: ButtonFormConfiguration = this.form.value;
        this.componentConfiguration.emit(data);
    }

    private setDataForEditMode() {
        this.form.get('componentType')?.setValue(this.buttonConfiguration.componentType);
        this.form.get('formControlName')?.setValue(this.buttonConfiguration.formControlName);
        this.form.get('width')?.setValue(this.buttonConfiguration.width);
        this.form.get('label')?.setValue(this.buttonConfiguration.label);
        this.form.get('themeColor')?.setValue(this.buttonConfiguration.themeColor);
        this.form.get('tooltipText')?.setValue(this.buttonConfiguration.tooltipText);
        this.buttonTypes.map((buttonType) => buttonType.name === this.buttonConfiguration.type.name && this.form.get('type')?.setValue(buttonType));
    }
}
