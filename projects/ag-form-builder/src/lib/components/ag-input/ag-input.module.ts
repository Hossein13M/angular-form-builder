import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgInputComponent } from './ag-input.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [AgInputComponent],
    imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatIconModule, MatButtonModule],
    exports: [AgInputComponent],
})
export class AgInputModule {}
