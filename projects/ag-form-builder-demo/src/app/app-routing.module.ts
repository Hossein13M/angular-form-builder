import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgFormViewerDemoComponent } from './modules/ag-form-viewer-demo/ag-form-viewer-demo.component';
import { AgFormBuilderDemoComponent } from './modules/ag-form-builder-demo/ag-form-builder-demo.component';

const routes: Routes = [
    { path: '', redirectTo: 'ag-form-builder', pathMatch: 'full' },
    { path: 'ag-form-builder', component: AgFormBuilderDemoComponent },
    { path: 'ag-form-viewer', component: AgFormViewerDemoComponent },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
