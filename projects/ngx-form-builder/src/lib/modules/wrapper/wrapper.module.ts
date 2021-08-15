import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ButtonModule } from '#components/button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingModalModule } from '../setting-modal/setting-modal.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '#components/input/input.module';

@NgModule({
    declarations: [WrapperComponent],
    imports: [CommonModule,
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
    exports: [WrapperComponent],
})
export class WrapperModule {}
