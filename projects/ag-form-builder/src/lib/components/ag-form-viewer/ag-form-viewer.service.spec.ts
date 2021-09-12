import { TestBed } from '@angular/core/testing';

import { AgFormViewerService } from './ag-form-viewer.service';

describe('AgFormViewerService', () => {
  let service: AgFormViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgFormViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
