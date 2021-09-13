import { defaultInputConfiguration } from './defaultInputConfiguration';
import { defaultButtonConfiguration } from './defaultButtonConfiguration';
import { defaultDatepickerConfiguration } from './defaultDatepickerConfiguration';
import { AgComponentSettings, AgComponentTypes } from '../models/agComponent.model';

export const defaultComponentsList: Array<{ componentType: AgComponentTypes; defaultComponent: AgComponentSettings }> = [
    { componentType: 'input', defaultComponent: defaultInputConfiguration },
    { componentType: 'button', defaultComponent: defaultButtonConfiguration },
    { componentType: 'date', defaultComponent: defaultDatepickerConfiguration },
];
