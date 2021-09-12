import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgDatePickerConfigurationComponent } from './ag-date-picker-configuration.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AgDatePickerConfigurationComponent
  ],
  exports: [
    AgDatePickerConfigurationComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AgDatePickerConfigurationModule { }
