import { Component, Input } from '@angular/core';
import { ButtonModel } from './button.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input('buttonConfiguration') buttonConfiguration!: ButtonModel;

    constructor(private router: Router) {}

    public handleClick(): void {
        if (!this.buttonConfiguration.localNavigationUrl && this.buttonConfiguration.externalLink) {
            window.location.href = this.buttonConfiguration.externalLink;
            // You can also use Location class of Angular
            // location.href = this.buttonConfiguration.externalLink;
        } else if (this.buttonConfiguration.localNavigationUrl && !this.buttonConfiguration.externalLink) {
            this.router.navigate([`${this.buttonConfiguration.localNavigationUrl}`]).finally();
        }
    }
}
