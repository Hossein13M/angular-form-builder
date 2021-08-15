import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFormBuilderComponent } from './ngx-form-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapperModule } from './modules/wrapper/wrapper.module';

@NgModule({
    declarations: [NgxFormBuilderComponent],
    imports: [BrowserModule, BrowserAnimationsModule, WrapperModule],
    exports: [NgxFormBuilderComponent],
})
export class NgxFormBuilderModule {}
