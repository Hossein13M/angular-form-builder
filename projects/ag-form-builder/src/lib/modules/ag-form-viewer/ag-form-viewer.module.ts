import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgFormViewerComponent } from './ag-form-viewer.component';
import { AgDatePickerModule } from '../../components/ag-date-picker/ag-date-picker.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { AgButtonModule } from '../../components/ag-button/ag-button.module';
import { AgInputModule } from '../../components/ag-input/ag-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    declarations: [AgFormViewerComponent],
    imports: [CommonModule, AgDatePickerModule, MatCardModule, MatIconModule, MatGridListModule, MatButtonModule, AgButtonModule, AgInputModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
    exports: [AgFormViewerComponent],
})
export class AgFormViewerModule {}
