import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgInputConfigurationComponent } from './ag-input-configuration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [AgInputConfigurationComponent],
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatButtonModule, MatSlideToggleModule],
    exports: [AgInputConfigurationComponent],
})
export class AgInputConfigurationModule {}
