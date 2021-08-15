import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormBuilderComponent } from './ngx-form-builder.component';

describe('NgxFormBuilderComponent', () => {
  let component: NgxFormBuilderComponent;
  let fixture: ComponentFixture<NgxFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
