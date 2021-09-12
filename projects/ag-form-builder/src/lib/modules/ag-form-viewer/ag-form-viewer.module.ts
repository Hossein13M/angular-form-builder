import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgFormViewerComponent } from './ag-form-viewer.component';

@NgModule({
    declarations: [AgFormViewerComponent],
    imports: [CommonModule],
    exports: [AgFormViewerComponent],
})
export class AgFormViewerModule {}
