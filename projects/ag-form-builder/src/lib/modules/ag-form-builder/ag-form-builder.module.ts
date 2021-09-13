import { NgModule } from '@angular/core';
import { AgFormBuilderComponent } from './ag-form-builder.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
 import { AgButtonModule } from '../../components/ag-button/ag-button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { AgSettingModalModule } from '../../components/ag-setting-modal/ag-setting-modal.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AgInputModule } from '../../components/ag-input/ag-input.module';
import { AgDatePickerModule } from '../../components/ag-date-picker/ag-date-picker.module';

@NgModule({
    declarations: [AgFormBuilderComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        AgButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
        AgSettingModalModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        AgInputModule,
        AgDatePickerModule,
    ],
    exports: [AgFormBuilderComponent],
})
export class AgFormBuilderModule {}
