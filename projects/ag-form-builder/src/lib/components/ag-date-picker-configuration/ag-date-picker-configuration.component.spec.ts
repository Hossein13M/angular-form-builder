import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDatePickerConfigurationComponent } from './ag-date-picker-configuration.component';

describe('AgDatePickerConfigurationComponent', () => {
  let component: AgDatePickerConfigurationComponent;
  let fixture: ComponentFixture<AgDatePickerConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgDatePickerConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDatePickerConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
