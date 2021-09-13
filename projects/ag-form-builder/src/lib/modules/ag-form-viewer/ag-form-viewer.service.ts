import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AgMockFormDataModel } from '../../models/agMockFormData.model';
import { mockFormData } from '../../const/mockFormData';

@Injectable({
    providedIn: 'root',
})
export class AgFormViewerService {
    private mockFormDataModelBehaviorSubject = new BehaviorSubject<AgMockFormDataModel>(mockFormData);

    constructor() {}

    public getMockData(): Observable<AgMockFormDataModel> {
        return this.mockFormDataModelBehaviorSubject;
    }
}
