import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-builder-wrapper',
    },
    {
        path: 'form-builder-wrapper',
        loadChildren: () => import('../app/modules/form-builder-wrapper/form-builder-wrapper.module').then((m) => m.FormBuilderWrapperModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
