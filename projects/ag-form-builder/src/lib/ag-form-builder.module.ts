import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgFormBuilderComponent } from './ag-form-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapperModule } from './modules/wrapper/wrapper.module';

@NgModule({
    declarations: [AgFormBuilderComponent],
    imports: [BrowserModule, BrowserAnimationsModule, WrapperModule],
    exports: [AgFormBuilderComponent],
})
export class AgFormBuilderModule {}
