import { Component } from '@angular/core';
import { Section } from '../../../../../ag-form-builder/src/lib/models/section.model';

@Component({
    selector: 'app-ag-form-builder-demo',
    templateUrl: './ag-form-builder-demo.component.html',
    styleUrls: ['./ag-form-builder-demo.component.scss'],
})
export class AgFormBuilderDemoComponent {
    constructor() {}

    public handleFormInfo(event: { name: string; sections: Array<Section> }): void {
        console.log(event);
    }
}
