import { ComponentSettings, ComponentTypes } from '../models/column.model';
import { defaultInputConfiguration } from './defaultInputConfiguration';
import { defaultButtonConfiguration } from './defaultButtonConfiguration';
import { defaultDatepickerConfiguration } from './defaultDatepickerConfiguration';

export const defaultComponentsList: Array<{ componentType: ComponentTypes; defaultComponent: ComponentSettings }> = [
    { componentType: 'input', defaultComponent: defaultInputConfiguration },
    { componentType: 'button', defaultComponent: defaultButtonConfiguration },
    { componentType: 'date', defaultComponent: defaultDatepickerConfiguration },
];
