import { useEffect, useRef } from 'react';
import { City, Locations, Location } from '../../types/city';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';
import leaflet from 'leaflet';

type MapProps = {
  city: City;
  points: Locations;
  selectedPoint?: Location;
};

export default function Map({
  city,
  points,
  selectedPoint,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultMarker = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentMarker = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            },
            {
              icon:
                selectedPoint &&
                point.latitude === selectedPoint.latitude &&
                point.longitude === selectedPoint.longitude
                  ? currentMarker
                  : defaultMarker,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint, currentMarker, defaultMarker]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}
