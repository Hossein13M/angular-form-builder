import { Component } from '@angular/core';
import { Section } from '#models/section.model';

@Component({
    selector: 'app-root',
    template: `<lib-ag-form-builder (formInfo)="handleFormInfo($event)"></lib-ag-form-builder> `,
})
export class AppComponent {
    public handleFormInfo(event: { name: string; section: Array<Section> }): void {
        console.log(event);
    }
}
