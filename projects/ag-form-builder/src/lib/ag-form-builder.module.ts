import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgFormBuilderComponent } from './ag-form-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapperModule } from './modules/wrapper/wrapper.module';

@NgModule({
    declarations: [AgFormBuilderComponent],
    imports: [CommonModule, BrowserAnimationsModule, WrapperModule],
    exports: [AgFormBuilderComponent],
})
export class AgFormBuilderModule {}
