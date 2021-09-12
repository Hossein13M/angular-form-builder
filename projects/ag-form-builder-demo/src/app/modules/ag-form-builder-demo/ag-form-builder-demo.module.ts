import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgFormBuilderDemoComponent } from './ag-form-builder-demo.component';
import { AgFormBuilderModule } from '../../../../../ag-form-builder/src/lib/modules/ag-form-builder/ag-form-builder.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AgFormBuilderDemoComponent],
  imports: [CommonModule, AgFormBuilderModule, RouterModule, MatButtonModule, MatIconModule]
})
export class AgFormBuilderDemoModule {}
