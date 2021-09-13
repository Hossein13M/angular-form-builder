import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgInputConfigurationComponent } from './ag-input-configuration.component';

describe('InputConfigurationComponent', () => {
    let component: AgInputConfigurationComponent;
    let fixture: ComponentFixture<AgInputConfigurationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ declarations: [AgInputConfigurationComponent] }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AgInputConfigurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
