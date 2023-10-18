'use client';
import * as React from 'react';
import Map, { Layer, Source } from 'react-map-gl';
import type { MapEvent, MapLayerMouseEvent } from 'react-map-gl';

export const mapboxAccessToken =
  'pk.eyJ1IjoiYXNoLWJlcmdzIiwiYSI6ImNsY2pieTEyODZob2YzcHBqYnU2dmtlOHcifQ.56BFVl5cNOQVIUZaELc_DQ';

const cityData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        city: 'San Francisco',
      },
      geometry: {
        type: 'Point',
        coordinates: [-122.4194, 37.7749],
      },
    },
    {
      type: 'Feature',
      properties: {
        city: 'New York',
      },
      geometry: {
        type: 'Point',
        coordinates: [-74.006, 40.7128],
      },
    },
  ],
};

function GeoJsonMap() {
  const pointLayerStyle = {
    id: 'point',
    type: 'circle', // this should be 'circle' for point data?
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf',
    },
  };

  // Handler for click events
  const onMapClick = (event: MapLayerMouseEvent) => {
    const { features, point } = event;

    // Check if clicked point is a feature (city point) on the map
    const clickedFeature =
      features && features.find((f: any) => f.layer.id === 'point');

    if (clickedFeature) {
      console.log('Clicked feature:', clickedFeature.properties);
      // If you want to use a modal, tooltip, etc., this is where you'd trigger it.
    }
  };

  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      mapboxAccessToken={mapboxAccessToken}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onClick={onMapClick}
      interactiveLayerIds={['point']}
    >
      <Source id="source" type="geojson" data={cityData}>
        <Layer {...pointLayerStyle} />
      </Source>
    </Map>
  );
}

export default GeoJsonMap;
