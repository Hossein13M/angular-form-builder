import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSettingModalComponent } from './ag-setting-modal.component';

describe('SettingModalComponent', () => {
    let component: AgSettingModalComponent;
    let fixture: ComponentFixture<AgSettingModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AgSettingModalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AgSettingModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
