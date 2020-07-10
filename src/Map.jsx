import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const DEFAULT_MAP_VIEW = { center: [-118.243683, 34.052235], zoom: 9 };

const Map = ({ mapboxKey }) => {
  const [map, setMap] = useState(null);

  const mapContainer = useRef(null);

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

  return (
    <div
      style={{ width: '99vw', height: '98vh', margin: 'auto' }}
      ref={mapContainer}
    />
  );
};

Map.propTypes = {
  mapboxKey: PropTypes.string.isRequired,
};

export default Map;
