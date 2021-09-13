import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgButtonConfigurationComponent } from './ag-button-configuration.component';

describe('ButtonConfigurationComponent', () => {
    let component: AgButtonConfigurationComponent;
    let fixture: ComponentFixture<AgButtonConfigurationComponent>;

    beforeEach(async () => await TestBed.configureTestingModule({ declarations: [AgButtonConfigurationComponent] }).compileComponents());

    beforeEach(() => {
        fixture = TestBed.createComponent(AgButtonConfigurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => expect(component).toBeTruthy());
});
