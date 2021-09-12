import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingModalComponent } from './setting-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InputConfigurationModule } from '../input-configuration/input-configuration.module';
import { ButtonConfigurationModule } from '../button-configuration/button-configuration.module';
import { AgDatePickerConfigurationModule } from '../ag-date-picker-configuration/ag-date-picker-configuration.module';

@NgModule({
    declarations: [SettingModalComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatButtonModule,
        InputConfigurationModule,
        ButtonConfigurationModule,
        MatIconModule,
        MatDividerModule,
        MatTooltipModule,
        AgDatePickerConfigurationModule
    ],
    entryComponents: [SettingModalComponent],
    exports: [SettingModalComponent],
})
export class SettingModalModule {}
