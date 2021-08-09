import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonFormConfiguration } from '#models/buttonFormConfiguration';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() disabledForDemo: boolean = false;
    @Input() buttonConfiguration!: ButtonFormConfiguration;

    constructor(private router: Router) {}

    public handleClick(): void {
        if (!this.buttonConfiguration.localNavigationUrl && this.buttonConfiguration.externalLink) {
            window.location.href = this.buttonConfiguration.externalLink;
        } else if (this.buttonConfiguration.localNavigationUrl && !this.buttonConfiguration.externalLink) {
            this.router.navigate([`${this.buttonConfiguration.localNavigationUrl}`]).finally();
        }
    }
}
