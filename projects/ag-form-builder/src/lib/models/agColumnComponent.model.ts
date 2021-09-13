import { AgComponentInfo, AgComponentTypes } from './agComponent.model';

export interface AgColumnComponentModel {
    index: number;
    componentType: AgComponentTypes;
    componentInfo: AgComponentInfo;
}
