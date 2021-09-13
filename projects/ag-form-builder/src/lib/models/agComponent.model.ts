import { AgButtonFormConfiguration } from './agButtonFormConfiguration';
import { AgInputFormConfiguration } from './agInputFormConfiguration.model';
import { AgDatepicker } from './agDatepicker.model';

export type AgComponentTypes = 'button' | 'input' | 'date';
export type AgComponentSettings = AgButtonFormConfiguration | AgInputFormConfiguration | AgDatepicker;
