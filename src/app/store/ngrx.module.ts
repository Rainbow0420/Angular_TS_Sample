import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { createMapReducer } from './map/map.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MapEffect } from './map/map.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

const reducer = {
  createMapReducer: createMapReducer,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([MapEffect]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
  ],
})
export class NgrxModule {}
