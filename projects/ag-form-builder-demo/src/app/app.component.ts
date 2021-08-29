import { Component } from '@angular/core';
import { Section } from '../../../ag-form-builder/src/lib/models/section.model';

@Component({
    selector: 'app-root',
    template: `
      <div class='demo-wrapper'>
        <ag-form-builder (emittedForm)='handleFormInfo($event)'></ag-form-builder>
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
