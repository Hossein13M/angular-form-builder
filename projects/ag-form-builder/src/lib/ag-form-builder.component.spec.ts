import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgFormBuilderComponent } from './ag-form-builder.component';

describe('AgFormBuilderComponent', () => {
    let component: AgFormBuilderComponent;
    let fixture: ComponentFixture<AgFormBuilderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AgFormBuilderComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AgFormBuilderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
