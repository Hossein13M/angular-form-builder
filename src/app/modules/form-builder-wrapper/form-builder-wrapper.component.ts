import { Component } from '@angular/core';

@Component({
    selector: 'app-form-builder-wrapper',
    templateUrl: './form-builder-wrapper.component.html',
    styleUrls: ['./form-builder-wrapper.component.scss'],
})
export class FormBuilderWrapperComponent {
    public saveForm(): void {
        console.log('saveForm');
    }
    public clearForm(): void {
        console.log('clearForm');
    }
}
