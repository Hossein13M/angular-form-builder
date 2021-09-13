import { AgButtonFormConfiguration } from './agButtonFormConfiguration';
import { AgInputFormConfiguration } from './agInputFormConfiguration.model';
import { AgDatepickerConfiguration } from './agDatepickerConfiguration.model';
import { AgComponentTypes } from './agComponent.model';

export interface AgColumnComponentModel {
    index: number;
    componentType: AgComponentTypes;
    componentInfo: AgButtonFormConfiguration | AgInputFormConfiguration | AgDatepickerConfiguration;
}
