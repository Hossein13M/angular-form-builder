import { AgComponentSettings, AgComponentTypes } from './agComponent.model';

export interface AgColumnModel {
    columnId: number;
    columnComponentType: AgComponentTypes;
    columnSetting: AgComponentSettings;
}
