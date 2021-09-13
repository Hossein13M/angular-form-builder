import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
