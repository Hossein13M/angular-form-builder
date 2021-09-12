import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Section } from '../../models/section.model';
import { SettingModalComponent } from '../../components/setting-modal/setting-modal.component';
import { ColumnComponentModel } from '../../models/columnComponent.model';

@Component({
    selector: 'lib-ag-form-builder',
    templateUrl: './ag-form-builder.component.html',
    styleUrls: ['./ag-form-builder.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AgFormBuilderComponent {
  @Output() emittedFormInfo: EventEmitter<{ name: string; sections: Array<Section> }> = new EventEmitter<{ name: string; sections: Array<Section> }>();

  public sections: Array<Section> = [];
  public form: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
  });

  constructor(private dialog: MatDialog, private fb: FormBuilder) {}

  public clearForm(): void {
    this.sections = [];
    this.form.reset();
  }

  public addSection(): void {
    this.sections.push({ columnsCount: 0 });
  }

  public removeSection(section: Section): void {
    const sectionIndex = this.sections.indexOf(section);
    this.sections.splice(sectionIndex, 1);
  }

  public openSettingDialog(sectionIndex: number, sectionInfo: Section): void {
    this.dialog
      .open(SettingModalComponent, { data: { sectionIndex, sectionInfo }, height: '800px', width: '1600px' })
      .afterClosed()
      .subscribe((sectionInfo: { sectionIndex: number; sectionColumns: Array<ColumnComponentModel> }) => {
        sectionInfo && this.createSectionPreview(sectionInfo);
      });
  }

  public submitForm(): void {
    this.emittedFormInfo.emit({ name: this.form.get('name')!.value, sections: this.sections });
  }

  public isSubmitButtonDisable(): boolean {
    return this.form.valid && !!this.sections.length;
  }

  private createSectionPreview(sectionInfo: { sectionIndex: number; sectionColumns: Array<ColumnComponentModel> }): void {
    this.sections[sectionInfo.sectionIndex] = {
      columnInfo: sectionInfo.sectionColumns,
      columnsCount: sectionInfo.sectionColumns.length,
    };
  }
}
