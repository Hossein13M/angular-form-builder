import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderWrapperComponent } from './form-builder-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormBuilderWrapperRoutingModule } from './form-builder-wrapper.routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ButtonModule } from '../../components/button/button.module';

@NgModule({
    declarations: [FormBuilderWrapperComponent],
    imports: [CommonModule, FormBuilderWrapperRoutingModule, DragDropModule, MatCardModule, MatButtonModule, MatGridListModule, ButtonModule],
})
export class FormBuilderWrapperModule {}
