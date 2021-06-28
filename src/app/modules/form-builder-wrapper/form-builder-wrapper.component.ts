import { Component } from '@angular/core';
import { Section } from './section.model';

@Component({
    selector: 'app-form-builder-wrapper',
    templateUrl: './form-builder-wrapper.component.html',
    styleUrls: ['./form-builder-wrapper.component.scss'],
})
export class FormBuilderWrapperComponent {
    public sections: Array<Section> = [{ columnsCount: 1 }];

    public saveForm(): void {
        console.log(this.sections);
    }

    public clearForm(): void {
        this.sections = [];
    }

    public addSection(): void {
        this.sections.push({ columnsCount: 1 });
    }

    public removeSection(section: Section): void {
        const sectionIndex = this.sections.indexOf(section);
        this.sections.splice(sectionIndex, 1);
    }

    public openSettingDialog(): void {}
}
