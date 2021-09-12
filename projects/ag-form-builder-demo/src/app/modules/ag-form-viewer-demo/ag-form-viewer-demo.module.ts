import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgFormViewerDemoComponent } from './ag-form-viewer-demo.component';
import { AgFormViewerModule } from '../../../../../ag-form-builder/src/lib/components/ag-form-viewer/ag-form-viewer.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AgFormViewerDemoComponent],
  imports: [CommonModule, AgFormViewerModule, MatButtonModule, RouterModule, MatIconModule]
})
export class AgFormViewerDemoModule {}
