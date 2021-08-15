import { TestBed } from '@angular/core/testing';

import { NgxFormBuilderService } from './ngx-form-builder.service';

describe('NgxFormBuilderService', () => {
    let service: NgxFormBuilderService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgxFormBuilderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
