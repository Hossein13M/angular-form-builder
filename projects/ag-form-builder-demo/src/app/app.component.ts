import { Component } from '@angular/core';
import { Section } from '#models/section.model';

@Component({
    selector: 'app-root',
    template: `
        <div class="demo-wrapper">
            <lib-ag-form-builder (formInfo)="handleFormInfo($event)"></lib-ag-form-builder>
        </div>
    `,
    styles: [
        `
            .demo-wrapper {
                height: 100%;
                display: flex;
                justify-content: center;
                padding: 3.5rem 0;
            }
        `,
    ],
})
export class AppComponent {
    public handleFormInfo(event: { name: string; section: Array<Section> }): void {
        console.log(event);
    }
}
