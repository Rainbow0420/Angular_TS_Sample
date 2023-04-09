import { createReducer, on } from '@ngrx/store';
import { loadPins, loadPinsSuccess } from './map.action';
import { IApartmentGeoLocations, IRecord } from 'src/app/models/map.models';
import { IAppState } from '../app.state';

const initialState: IAppState = {
  apartmentLocations: {},
};
export const createMapReducer = createReducer(
  initialState,
  on(loadPinsSuccess, (state, { apartmentLocations }) => {
    console.log('on ~ state:', state);
    return {
      ...state,
      apartmentLocations: apartmentLocations

    };
  })
);
