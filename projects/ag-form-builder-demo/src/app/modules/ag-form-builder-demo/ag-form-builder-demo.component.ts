import { Component } from '@angular/core';
import { AgSection } from '../../../../../ag-form-builder/src/lib/models/agSection.model';

@Component({
    selector: 'app-ag-form-builder-demo',
    templateUrl: './ag-form-builder-demo.component.html',
    styleUrls: ['./ag-form-builder-demo.component.scss'],
})
export class AgFormBuilderDemoComponent {
    constructor() {}

    public handleFormInfo(event: { name: string; sections: Array<AgSection> }): void {
        console.log(event);
    }
}
