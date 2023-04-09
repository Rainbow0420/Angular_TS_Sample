import { IApartmentGeoLocations } from './../../models/map.models';
import { createAction, props } from '@ngrx/store';


export const loadPins = createAction('[map component] load pins');
export const loadPinsSuccess = createAction('[map component] load pins success', props<{apartmentLocations: IApartmentGeoLocations}>());
