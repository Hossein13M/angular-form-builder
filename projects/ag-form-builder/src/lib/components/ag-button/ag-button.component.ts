import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AgButtonFormConfiguration } from '../../models/agButtonFormConfiguration';

@Component({
    selector: 'ag-button',
    templateUrl: './ag-button.component.html',
    styleUrls: ['./ag-button.component.scss'],
})
export class AgButtonComponent {
    @Input() disableButton: boolean = false;
    @Input() buttonConfiguration!: AgButtonFormConfiguration;

    constructor(private router: Router) {}

    public handleClick(): void {
        if (!this.buttonConfiguration.localNavigationUrl && this.buttonConfiguration.externalLink) {
            window.location.href = this.buttonConfiguration.externalLink;
        } else if (this.buttonConfiguration.localNavigationUrl && !this.buttonConfiguration.externalLink) {
            this.router.navigate([`${this.buttonConfiguration.localNavigationUrl}`]).finally();
        }
    }
}
