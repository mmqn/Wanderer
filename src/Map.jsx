import React, { useRef, useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Card from './components/Card';

const DEFAULT_MAP_VIEW = { center: [-118.243683, 34.052235], zoom: 9 };

const Map = ({ places, isMobile, mapboxKey }) => {
  const [map, setMap] = useState(null);
  const [markerRefs, setMarkerRefs] = useState([]);
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);

  const mapContainer = useRef(null);

  // Initialize map
  useEffect(() => {
    mapboxgl.accessToken = mapboxKey;

    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: DEFAULT_MAP_VIEW.center,
      zoom: DEFAULT_MAP_VIEW.zoom,
    });

    setMap(newMap);
  }, [mapboxKey, mapContainer]);

  // Create a marker ref for every place
  useEffect(() => {
    const newMarkerRefs = [];

    places.forEach(() => newMarkerRefs.push(createRef()));

    setMarkerRefs(newMarkerRefs);
  }, [places]);

  // Create Mapbox marker for each marker ref
  useEffect(() => {
    markerRefs.forEach((marker, index) => {
      const placeCoordinates = places[index].Coordinates;
      const lngLat = [placeCoordinates.lng, placeCoordinates.lat];

      new mapboxgl.Marker(marker.current).setLngLat(lngLat).addTo(map);
    });
  }, [places, markerRefs, map]);

  const handleMountPlaceCard = place => setSelectedPlaceDetails(place);

  return (
    <>
      <div
        style={{ width: '100vw', height: '100vh', margin: 'auto' }}
        ref={mapContainer}
      />

      <div style={{ display: 'none' }}>
        {places.map((place, index) => (
          <div
            key={place.id}
            ref={markerRefs[index]}
            className='map-marker'
            onClick={() => handleMountPlaceCard(place)}
          />
        ))}
      </div>

      {selectedPlaceDetails && (
        <div
          style={{
            zIndex: '2',
            position: 'fixed',
            bottom: '30px',
            width: isMobile ? '90vw' : 'auto',
          }}
        >
          <Card isMinimal placeDetails={selectedPlaceDetails} />

          <button
            type='button'
            className='card-close-button'
            onClick={() => handleMountPlaceCard(null)}
          >
            {isMobile ? 'X' : 'Close'}
          </button>
        </div>
      )}
    </>
  );
};

Map.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      Name: PropTypes.string,
      Categories: PropTypes.arrayOf(PropTypes.string),
      Description: PropTypes.string,
      Notes: PropTypes.string,
      Address: PropTypes.string,
      City: PropTypes.string,
      Region: PropTypes.string,
      Coordinates: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    }),
  ).isRequired,
  isMobile: PropTypes.bool.isRequired,
  mapboxKey: PropTypes.string.isRequired,
};

export default Map;
