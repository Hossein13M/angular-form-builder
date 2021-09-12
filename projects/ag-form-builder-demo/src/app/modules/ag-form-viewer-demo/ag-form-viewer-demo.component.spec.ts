import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgFormViewerDemoComponent } from './ag-form-viewer-demo.component';

describe('AgFormViewerDemoComponent', () => {
  let component: AgFormViewerDemoComponent;
  let fixture: ComponentFixture<AgFormViewerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgFormViewerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgFormViewerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
