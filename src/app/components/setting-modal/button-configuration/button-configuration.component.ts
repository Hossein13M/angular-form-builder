import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'app-button-configuration',
    templateUrl: './button-configuration.component.html',
    styleUrls: ['./button-configuration.component.scss'],
})
export class ButtonConfigurationComponent {
    public themeColors: Array<ThemePalette> = ['primary', 'accent', 'warn'];
    public buttonTypes: Array<{ name: string; icon: string }> = [
        { name: 'accept', icon: 'check_circle' },
        { name: 'reject', icon: 'cancel' },
        { name: 'upload', icon: 'upload' },
        { name: 'download', icon: 'download' },
        { name: 'local Route', icon: 'alt_route' },
        { name: 'externalLink', icon: 'link' },
    ];

    public form: FormGroup = this.fb.group({
        formControlName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
        type: ['', Validators.required],
        themeColor: ['primary', Validators.required],
        label: ['', Validators.required],
        tooltipText: ['', Validators.required],
        downloadOrExternalNavigateLink: ['', Validators.required],
    });

    constructor(private fb: FormBuilder) {}

    public submitForm(): void {
        console.log(this.form.value);
    }
}
