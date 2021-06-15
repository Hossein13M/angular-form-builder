import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderWrapperComponent } from './form-builder-wrapper.component';

const routes: Routes = [{ path: '', component: FormBuilderWrapperComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FormBuilderWrapperRoutingModule {}
