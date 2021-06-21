import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, MatButtonModule, MatTooltipModule, MatIconModule, RouterModule],
    exports: [ButtonComponent],
})
export class ButtonModule {}
