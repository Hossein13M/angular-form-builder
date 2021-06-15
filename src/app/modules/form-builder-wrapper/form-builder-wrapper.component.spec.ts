import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilderWrapperComponent } from './form-builder-wrapper.component';

describe('FormBuilderWrapperComponent', () => {
    let component: FormBuilderWrapperComponent;
    let fixture: ComponentFixture<FormBuilderWrapperComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormBuilderWrapperComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormBuilderWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
