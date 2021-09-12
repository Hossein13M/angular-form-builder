import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MockFormDataModel } from '../../models/mockFormData.model';
import { mockFormData } from '../../const/mockFormData';

@Injectable({
    providedIn: 'root',
})
export class AgFormViewerService {
    private mockFormDataModelBehaviorSubject = new BehaviorSubject<MockFormDataModel>(mockFormData);

    constructor() {}

    public getMockData(): Observable<MockFormDataModel> {
        return this.mockFormDataModelBehaviorSubject;
    }
}
