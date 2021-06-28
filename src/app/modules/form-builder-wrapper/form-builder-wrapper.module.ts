import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormBuilderWrapperComponent } from './form-builder-wrapper.component';
import { FormBuilderWrapperRoutingModule } from './form-builder-wrapper.routing.module';
import { ButtonModule } from '../../components/button/button.module';
import { SettingModalModule } from '../../components/setting-modal/setting-modal.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [FormBuilderWrapperComponent],
    imports: [
        CommonModule,
        FormBuilderWrapperRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        ButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
        SettingModalModule,
    ],
})
export class FormBuilderWrapperModule {}
