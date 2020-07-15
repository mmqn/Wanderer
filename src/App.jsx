import React, { useState, useEffect } from 'react';
import './styles/App.css';
import useWindowWidthWatcher from './util/useWindowWidthWatcher';
import List from './List';
import Map from './Map';
import ErrorMessage from './components/ErrorMessage';

const PLACES_ENDPOINT = 'https://wanderer-mmqn.firebaseio.com/places.json';
const MAPBOX_APIKEY =
  'pk.eyJ1IjoibW1xbiIsImEiOiJjazAxNDdtMGUwN3RxM2JwNGxzYWdqeDltIn0.Ctg235d9st1jNa25YSaFlg';

export default () => {
  const [goodResponse, setGoodResponse] = useState(true);
  const [places, setPlaces] = useState([]);
  const [isMapView, setIsMapView] = useState(true);
  const [minimizeHeader, setMinimizeHeader] = useState(false);

  const windowWidth = useWindowWidthWatcher();
  const isMobile = windowWidth < 685;

  const fetchData = async () => {
    const response = await fetch(PLACES_ENDPOINT);
    const status = response.status;
    const data = await response.json();

    if (status === 200) {
      setGoodResponse(true);
      setPlaces(data);
    } else {
      console.warn(status, response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleUpdateHeaderSize = () => {
      if (window.pageYOffset >= 40) setMinimizeHeader(true);
      else if (window.pageYOffset < 40) setMinimizeHeader(false);
    };

    window.addEventListener('scroll', handleUpdateHeaderSize);

    // Run on unmounting; cleanup
    return () => window.removeEventListener('sroll', handleUpdateHeaderSize);
  }, []);

  return (
    <>
      <h1
        title={`Click to switch to ${isMapView ? 'list' : 'map'} view`}
        className={`header ${
          minimizeHeader ? 'minimize-header' : 'maximize-header'
        }`}
        onClick={() => setIsMapView(prevValue => !prevValue)}
      >
        Wanderer
      </h1>

      {goodResponse === true && places.length > 0 ? (
        isMapView ? (
          <Map places={places} isMobile={isMobile} mapboxKey={MAPBOX_APIKEY} />
        ) : (
          <List places={places} isMobile={isMobile} mapboxKey={MAPBOX_APIKEY} />
        )
      ) : (
        <ErrorMessage />
      )}
    </>
  );
};
