import { IRecord } from './../../models/map.models';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { MapService } from 'src/app/service/map.service';
import { loadPins, loadPinsSuccess } from './map.action';
import { map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapEffect {
  constructor(private actions$: Actions, private mapService: MapService) {}

  fetchApartmentLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPins),
      mergeMap(() =>
        this.mapService
          .fetchMapPins()
          .pipe(map((apartmentLocations) => loadPinsSuccess({ apartmentLocations })))
      )
    )
  );
}
