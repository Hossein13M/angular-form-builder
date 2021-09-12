import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgFormViewerComponent } from './ag-form-viewer.component';

describe('AgFormViewerComponent', () => {
  let component: AgFormViewerComponent;
  let fixture: ComponentFixture<AgFormViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgFormViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgFormViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
