import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgFormBuilderDemoComponent } from './ag-form-builder-demo.component';

describe('AgFormBuilderDemoComponent', () => {
  let component: AgFormBuilderDemoComponent;
  let fixture: ComponentFixture<AgFormBuilderDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgFormBuilderDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgFormBuilderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
