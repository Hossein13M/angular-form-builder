import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test.routing.module';
import { InputModule } from '../../components/input/input.module';

@NgModule({
    declarations: [TestComponent],
    imports: [CommonModule, TestRoutingModule, InputModule],
})
export class TestModule {}
