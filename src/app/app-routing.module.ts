import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'test',
    },
    {
        path: 'form-builder-wrapper',
        loadChildren: () => import('../app/modules/form-builder-wrapper/form-builder-wrapper.module').then((m) => m.FormBuilderWrapperModule),
    },
    {
        path: 'test',
        loadChildren: () => import('../app/modules/test/test.module').then((m) => m.TestModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
