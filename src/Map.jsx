import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ mapboxKey }) => {
	const mapContainer = useRef(null);

	const [mapView, setMapView] = useState({
		center: [-118.243683, 34.052235],
		zoom: 9
	});
	const [mapLoaded, setMapLoaded] = useState(false);

	mapboxgl.accessToken = mapboxKey;

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: mapView.center,
			zoom: mapView.zoom
		});

		setMapLoaded(true);
	}, [mapLoaded]);

	return (
		<div
			style={{ width: "99vw", height: "98vh", margin: "auto" }}
			ref={mapContainer}
		/>
	);
};

Map.propTypes = {
	mapboxKey: PropTypes.string.isRequired
};

export default Map;
