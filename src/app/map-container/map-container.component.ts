import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MapService } from '../service/map.service';
import { Store, select } from '@ngrx/store';
import { loadPins } from '../store/map/map.action';
import { selectApartmentLocations } from '../store/map/map.selector';
import { Observable } from 'rxjs';
import { IApartmentGeoLocations } from '../models/map.models';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})
export class MapContainerComponent implements OnInit, AfterViewInit {
  map: mapboxgl.Map | undefined;
  styleUrl =
    'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh';
  marker: mapboxgl.Marker | undefined;
  zoom: number = 12;
  lat = 40.7128;
  lan = -74.006;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  locations$: Observable<IApartmentGeoLocations> | undefined;



  constructor(private store: Store<{ apartmentLocations: {} }>) {
    (mapboxgl as any).accessToken = environment.mapBox.accessToken;

    this.store.dispatch(loadPins());
  }

  ngOnInit(): void {
    this.store.pipe(select(selectApartmentLocations)).subscribe((data) => {
      console.log('this.store.pipe ~ data:', data);
      /* Need to debug further why selector is */
    });
  }

  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap() {

    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: this.styleUrl,
      zoom: this.zoom,
      center: [-96.4812, 33.1758],
    });

    // Add map controls
    this.map.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    this.map.on('load', () => {
      if (this.map) {
        this.map.addSource('maptiler', {
          id: 'maptiler-layer',
          type: 'vector',
          tiles: [
            'https://api.maptiler.com/maps/6960764a-9ce7-4d0e-a460-5e2583f7ca59/style.json?key=pXj7ISzIvAgYUgPS5nxk',
          ],
        });

        this.map.addLayer({
          id: 'maptiler-layer',
          type: 'fill',
          source: 'maptiler',
          'source-layer': 'your-source-layer-name',
        });
      }

      this.addMarkers();
    });
  }

  addMarkers() {
    const geoLocations = [
      {
        Longitude: '-96.4812',
        Latitude: '33.1758',
        Percision: 'RANGE_INTERPOLATED',
        IsValid: true,
      },
      {
        Longitude: '-96.8123',
        Latitude: '33.2751',
        Percision: 'ROOFTOP',
        IsValid: true,
      },
    ];

    if (this.map) {
      // Create an empty bounding box
      let bounds = new mapboxgl.LngLatBounds();

      geoLocations.forEach((location) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([Number(location.Longitude), Number(location.Latitude)])
          .addTo(this.map!)
          .on('click', () => {
            this.map!.flyTo({
              center: [Number(location.Longitude), Number(location.Latitude)],
              zoom: 1,
            });
          });

        // Extend the bounds of the bounding box to include the marker
        bounds.extend(marker.getLngLat());
      });

      // Fit the map to the bounding box of the markers
      this.map.fitBounds(bounds, { padding: 500 });
    }


  }

  getHeight() {
    return window.innerHeight + 'px';
  }
}
