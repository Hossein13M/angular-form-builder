import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '#components/button/button.module';
import { InputModule } from '#components/input/input.module';
import { NgxFormBuilderComponent } from './ngx-form-builder.component';
import { SettingModalModule } from './modules/setting-modal/setting-modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [NgxFormBuilderComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
        InputModule,
    ],
    exports: [NgxFormBuilderComponent],
})
export class NgxFormBuilderModule {}
