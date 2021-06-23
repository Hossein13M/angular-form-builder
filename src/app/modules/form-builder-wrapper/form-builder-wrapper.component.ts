import { Component } from '@angular/core';
import { Section } from './section.model';

@Component({
    selector: 'app-form-builder-wrapper',
    templateUrl: './form-builder-wrapper.component.html',
    styleUrls: ['./form-builder-wrapper.component.scss'],
})
export class FormBuilderWrapperComponent {
    public sections: Array<Section> = [];

    public saveForm(): void {
        console.log('saveForm');
    }
    public clearForm(): void {
        console.log('clearForm');
    }

    public addSection(): void {
        this.sections.push({ columnsCount: 1, id: this.sections.length });
    }

    public removeSection(sectionId: number): void {
        this.sections.splice(sectionId, 1);
    }

    public openSettingDialog(): void {}
}
