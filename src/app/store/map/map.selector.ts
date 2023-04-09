import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';

export const apartmentLocationsSelector = createFeatureSelector<IAppState>('apartmentLocations');
export const selectApartmentLocations = (state: IAppState) => state.apartmentLocations;

