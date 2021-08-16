import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Section } from '#models/section.model';

@Component({
    selector: 'lib-ag-form-builder',
    templateUrl: './ag-form-builder.component.html',
    styleUrls: ['./ag-form-builder.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AgFormBuilderComponent {
    @Output() formInfo: EventEmitter<{ name: string; section: Array<Section> }> = new EventEmitter<{ name: string; section: Array<Section> }>();
    public handleFormInfo(event: { name: string; section: Array<Section> }): void {
        this.formInfo.emit(event);
    }
}
