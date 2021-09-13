import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgSettingModalComponent } from './ag-setting-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AgButtonConfigurationModule } from '../ag-button-configuration/ag-button-configuration.module';
import { AgDatePickerConfigurationModule } from '../ag-date-picker-configuration/ag-date-picker-configuration.module';
import { AgInputConfigurationModule } from '../ag-input-configuration/ag-input-configuration.module';

@NgModule({
    declarations: [AgSettingModalComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatButtonModule,
        AgInputConfigurationModule,
        AgButtonConfigurationModule,
        MatIconModule,
        MatDividerModule,
        MatTooltipModule,
        AgDatePickerConfigurationModule,
    ],
    entryComponents: [AgSettingModalComponent],
    exports: [AgSettingModalComponent],
})
export class AgSettingModalModule {}
