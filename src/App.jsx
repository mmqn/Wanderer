import React, { useState, useEffect, Fragment } from "react";
import "./util/App.css";
// import Map from "./Map";
import List from "./List";
import ErrorMessage from "./util/ErrorMessage";
// import { unsplashCredit } from "./util/elements";

const PLACES_ENDPOINT = "https://wanderer-mmqn.firebaseio.com/places.json";
const MAPBOX_APIKEY =
	"pk.eyJ1IjoibW1xbiIsImEiOiJjazAxNDdtMGUwN3RxM2JwNGxzYWdqeDltIn0.Ctg235d9st1jNa25YSaFlg";

export default () => {
	const [goodResponse, setGoodResponse] = useState(false);
	const [places, setPlaces] = useState([]);
	const [minimizeHeader, setMinimizeHeader] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 415);

	useEffect(() => {
		fetch(PLACES_ENDPOINT)
			.then(response => {
				const { status } = response;

				if (status === 200) {
					setGoodResponse(true);
					return response.json();
				}
			})
			.then(places => setPlaces(places));

		window.addEventListener("scroll", () => {
			if (window.pageYOffset >= 40) setMinimizeHeader(true);
			else if (window.pageYOffset < 40) setMinimizeHeader(false);
		});

		window.addEventListener("resize", ev => {
			const { innerWidth } = ev.target;

			if (isMobile && innerWidth >= 415) setIsMobile(false);
			else if (!isMobile && innerWidth < 415) setIsMobile(true);
		});
	}, [isMobile]);

	return (
		<Fragment>
			<h1
				className={`header ${
					minimizeHeader ? "minimize-header" : "maximize-header"
				}`}
			>
				Wanderer
			</h1>

			{goodResponse === true && places && places.length > 0 ? (
				<Fragment>
					<List places={places} isMobile={isMobile} mapboxKey={MAPBOX_APIKEY} />

					{/* <Map mapboxKey={MAPBOX_APIKEY} /> */}

					{/* <div style={{ position: "fixed", bottom: "10px", left: "10px" }}>
						{unsplashCredit}
					</div> */}
				</Fragment>
			) : (
				<ErrorMessage />
			)}
		</Fragment>
	);
};
