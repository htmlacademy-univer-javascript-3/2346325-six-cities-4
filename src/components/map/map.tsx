import { useEffect, useRef } from 'react';
import { City, /*Locations/*, Location */} from '../../types/city';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offers';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';
import leaflet from 'leaflet';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
};

export default function Map({
  city,
  offers,
  selectedOffer,
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
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                selectedOffer &&
                offer.location.latitude === selectedOffer.location.latitude &&
                offer.location.longitude === selectedOffer.location.longitude
                  ? currentMarker
                  : defaultMarker,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer, currentMarker, defaultMarker]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}
