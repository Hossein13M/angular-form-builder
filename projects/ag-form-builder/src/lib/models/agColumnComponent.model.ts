import { AgButtonFormConfiguration } from './agButtonFormConfiguration';
import { AgInputFormConfiguration } from './agInputFormConfiguration.model';
import { AgDatepicker } from './agDatepicker.model';
import { AgComponentTypes } from './agComponent.model';

export interface AgColumnComponentModel {
    index: number;
    componentType: AgComponentTypes;
    componentInfo: AgButtonFormConfiguration | AgInputFormConfiguration | AgDatepicker;
}
