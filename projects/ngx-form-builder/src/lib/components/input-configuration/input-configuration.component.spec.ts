import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputConfigurationComponent } from './input-configuration.component';

describe('InputConfigurationComponent', () => {
    let component: InputConfigurationComponent;
    let fixture: ComponentFixture<InputConfigurationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ declarations: [InputConfigurationComponent] }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InputConfigurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
