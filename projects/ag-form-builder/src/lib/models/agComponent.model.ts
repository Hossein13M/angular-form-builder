import { AgButtonFormConfiguration } from './agButtonFormConfiguration';
import { AgInputFormConfiguration } from './agInputFormConfiguration.model';
import { AgDatepickerConfiguration } from './agDatepickerConfiguration.model';

export type AgComponentTypes = 'button' | 'input' | 'date';
export type AgComponentSettings = AgButtonFormConfiguration | AgInputFormConfiguration | AgDatepickerConfiguration;
export type AgComponentInfo = AgButtonFormConfiguration | AgInputFormConfiguration | AgDatepickerConfiguration;
