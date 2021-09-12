import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgFormViewerComponent } from './ag-form-viewer.component';
import { AgDatePickerModule } from '../../components/ag-date-picker/ag-date-picker.module';

@NgModule({
    declarations: [AgFormViewerComponent],
  imports: [CommonModule, AgDatePickerModule],
    exports: [AgFormViewerComponent],
})
export class AgFormViewerModule {}
