import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgDatePickerComponent } from './ag-date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AgDatePickerComponent],
    exports: [AgDatePickerComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatIconModule]
})
export class AgDatePickerModule {}
