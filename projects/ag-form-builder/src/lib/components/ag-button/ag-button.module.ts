import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgButtonComponent } from './ag-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AgButtonComponent],
    imports: [CommonModule, MatButtonModule, MatTooltipModule, MatIconModule, RouterModule],
    exports: [AgButtonComponent],
})
export class AgButtonModule {}
