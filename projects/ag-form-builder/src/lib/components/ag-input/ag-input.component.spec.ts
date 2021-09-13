import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgInputComponent } from './ag-input.component';

describe('InputComponent', () => {
    let component: AgInputComponent;
    let fixture: ComponentFixture<AgInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AgInputComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AgInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
