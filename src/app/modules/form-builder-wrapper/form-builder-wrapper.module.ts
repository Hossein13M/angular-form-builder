import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderWrapperComponent } from './form-builder-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormBuilderWrapperRoutingModule } from './form-builder-wrapper.routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [FormBuilderWrapperComponent],
    imports: [CommonModule, FormBuilderWrapperRoutingModule, DragDropModule, MatCardModule, MatButtonModule],
})
export class FormBuilderWrapperModule {}
