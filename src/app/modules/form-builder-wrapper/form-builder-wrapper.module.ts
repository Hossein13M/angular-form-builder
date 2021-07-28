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
import { SettingModalModule } from '../setting-modal/setting-modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

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
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
})
export class FormBuilderWrapperModule {}
