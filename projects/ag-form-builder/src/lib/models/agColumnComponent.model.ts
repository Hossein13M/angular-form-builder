import { AgComponentConfiguration, AgComponentTypes } from './agComponent.model';

export interface AgColumnComponentModel {
    index: number;
    componentType: AgComponentTypes;
    componentInfo: AgComponentConfiguration;
}
