import { Component } from '@angular/core';

@Component({
    selector: 'app-setting-modal',
    templateUrl: './setting-modal.component.html',
    styleUrls: ['./setting-modal.component.scss'],
})
export class SettingModalComponent {
    public removeComponentFromSection() {
        console.log('hel');
    }
}
