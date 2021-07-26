import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-builder',
    },
    {
        path: 'form-builder',
        loadChildren: () => import('../app/modules/form-builder-wrapper/form-builder-wrapper.module').then((m) => m.FormBuilderWrapperModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
