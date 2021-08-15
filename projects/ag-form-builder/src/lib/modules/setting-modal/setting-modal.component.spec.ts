import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingModalComponent } from './setting-modal.component';

describe('SettingModalComponent', () => {
    let component: SettingModalComponent;
    let fixture: ComponentFixture<SettingModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SettingModalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
