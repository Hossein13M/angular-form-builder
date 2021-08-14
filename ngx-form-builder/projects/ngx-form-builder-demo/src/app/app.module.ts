import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFormBuilderModule } from '../../../ngx-form-builder/src/lib/ngx-form-builder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFormBuilderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
