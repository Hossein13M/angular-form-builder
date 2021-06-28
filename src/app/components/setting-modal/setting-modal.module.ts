import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingModalComponent } from './setting-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [SettingModalComponent],
    imports: [CommonModule, MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatButtonModule],
    entryComponents: [SettingModalComponent],
    exports: [SettingModalComponent],
})
export class SettingModalModule {}
