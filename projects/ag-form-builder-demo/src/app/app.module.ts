import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgFormBuilderModule } from '../../../ag-form-builder/src/lib/modules/ag-form-builder/ag-form-builder.module';
import { AgFormViewerModule } from '../../../ag-form-builder/src/lib/modules/ag-form-viewer/ag-form-viewer.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AgFormBuilderModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule,
        MatTabsModule,
        MatIconModule,
        AgFormViewerModule,
        MatToolbarModule,
        MatButtonModule,
        MatTooltipModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
