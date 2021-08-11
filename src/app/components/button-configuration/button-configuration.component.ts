import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonFormConfiguration } from '#models/buttonFormConfiguration';

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
        componentType: [this.buttonConfiguration.componentType ?? 'button'],
        formControlName: [this.buttonConfiguration.formControl ?? null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
        type: [this.buttonConfiguration.type ?? '', Validators.required],
        width: [this.buttonConfiguration.width ?? '180', Validators.required],
        themeColor: [this.buttonConfiguration.themeColor ?? 'primary', Validators.required],
        label: [this.buttonConfiguration.label ?? '', Validators.required],
        tooltipText: [this.buttonConfiguration.tooltipText ?? ''],
    });

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form.get('type')!.valueChanges.subscribe((value) => {
            if (value.name === 'download' || value.name === 'externalLink') {
                this.form.addControl('downloadOrExternalNavigateLink', new FormControl('', Validators.required));
            } else {
                if (!this.form.get('downloadOrExternalNavigateLink')) this.form.removeControl('downloadOrExternalNavigateLink');
            }
        });
    }

    public submitComponentConfigurationForm(): void {
        this.componentConfiguration.emit(this.form.value);
    }
}
