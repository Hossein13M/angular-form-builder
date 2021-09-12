import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AgFormViewerDemoModule } from './modules/ag-form-viewer-demo/ag-form-viewer-demo.module';
import { AppComponent } from './app.component';
import { AgFormBuilderModule } from '../../../ag-form-builder/src/lib/modules/ag-form-builder/ag-form-builder.module';
import { AgFormBuilderDemoModule } from './modules/ag-form-builder-demo/ag-form-builder-demo.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppComponent],
  imports: [BrowserModule, AgFormBuilderModule, BrowserAnimationsModule, AppRoutingModule, AgFormViewerDemoModule, AgFormBuilderDemoModule, RouterModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
