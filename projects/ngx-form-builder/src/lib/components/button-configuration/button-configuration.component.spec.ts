import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonConfigurationComponent } from './button-configuration.component';

describe('ButtonConfigurationComponent', () => {
    let component: ButtonConfigurationComponent;
    let fixture: ComponentFixture<ButtonConfigurationComponent>;

    beforeEach(async () => await TestBed.configureTestingModule({ declarations: [ButtonConfigurationComponent] }).compileComponents());

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonConfigurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => expect(component).toBeTruthy());
});
