import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { locationPin } from "./util/elements";

const Card = props => {
	// this is only applicable if `condensed` is true (i.e. when cards are set to condensed)
	const [openCard, setOpenCard] = useState(false);

	const { placeDetails, condensed, isMobile, mapboxKey } = props;

	const {
		id,
		Name,
		Description,
		Categories,
		Address,
		City,
		Region,
		Coordinates,
		Notes
	} = placeDetails;

	const mapImgWidth = isMobile ? window.innerWidth - 60 : 400;

	const mapImgUrl =
		"https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/" +
		Coordinates.lng +
		"," +
		Coordinates.lat +
		",9.9,0,0/" +
		mapImgWidth +
		"x120@2x?access_token=" +
		mapboxKey;

	const openDirectionsUrl =
		"https://www.google.com/maps/dir/?api=1&origin=&destination=" +
		Coordinates.lat +
		"," +
		Coordinates.lng +
		"&travelmode=driving";

	const handleFiltering = ({ ev, payload }) => {
		ev.stopPropagation();
		props.handleFiltering(payload);
	};

	return (
		<div
			className="card has-hidden-child"
			onClick={() => setOpenCard(!openCard)}
		>
			<h2 className="use-ellipsis">{Name}</h2>
			<h6 className="use-ellipsis">{Description}</h6>

			<div className="categories">
				{Categories.map(category => (
					<span
						key={`${id} - ${category}`}
						onClick={ev =>
							handleFiltering({
								ev,
								payload: {
									id: `"Categories"|${category}`,
									targetFilterType: "Categories",
									targetFilterValue: category
								}
							})
						}
					>
						{category}
					</span>
				))}
			</div>

			{(condensed && !openCard) || (
				<div className="row">
					<p className="notes">{Notes}</p>

					<div className="static-map">
						<img
							src={mapImgUrl}
							alt={`${Name} Map Preview`}
							width={mapImgWidth}
							height="120"
						/>

						{isMobile ? (
							<span
								style={{
									position: "absolute",
									top: "42px",
									left: mapImgWidth - 10 - mapImgWidth / 2
								}}
							>
								{locationPin}
							</span>
						) : (
							<div className="hidden-child">
								<div className="cover" />

								<div className="address">
									<p>{Address}</p>
									<p
										className="actionable-text"
										onClick={ev =>
											handleFiltering({
												ev,
												payload: {
													id: `"City"|${City}`,
													targetFilterType: "City",
													targetFilterValue: City
												}
											})
										}
									>
										{City}
									</p>
									<p
										className="actionable-text"
										onClick={ev =>
											handleFiltering({
												ev,
												payload: {
													id: `"Region"|${Region}`,
													targetFilterType: "Region",
													targetFilterValue: Region
												}
											})
										}
									>
										{Region}
									</p>
								</div>

								<div className="get-directions">
									<span
										style={{
											position: "absolute",
											top: "3px",
											left: "-9px"
										}}
									>
										{locationPin}
									</span>
									<span />
									<a
										href={openDirectionsUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										directions
									</a>
								</div>
							</div>
						)}
					</div>

					{isMobile && (
						<Fragment>
							<div
								className="address"
								style={{
									position: "relative",
									top: "0px",
									left: "0px",
									marginTop: "10px"
								}}
							>
								<p>{Address}</p>
								<p
									className="actionable-text"
									onClick={ev => {
										handleFiltering({
											ev,
											payload: {
												id: `"City"|${City}`,
												targetFilterType: "City",
												targetFilterValue: City
											}
										});
									}}
								>
									{City}
								</p>
								<p
									className="actionable-text"
									onClick={ev => {
										handleFiltering({
											ev,
											payload: {
												id: `"Region"|${Region}`,
												targetFilterType: "Region",
												targetFilterValue: Region
											}
										});
									}}
								>
									{Region}
								</p>
							</div>

							<a
								href={openDirectionsUrl}
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "underline" }}
							>
								Get Directions
							</a>
						</Fragment>
					)}
				</div>
			)}
		</div>
	);
};

Card.propTypes = {
	placeDetails: PropTypes.object.isRequired,
	condensed: PropTypes.bool,
	isMobile: PropTypes.bool,
	mapboxKey: PropTypes.string,
	handleFiltering: PropTypes.func
};

Card.defaultProps = {
	condensed: false,
	isMobile: false,
	mapboxKey: "",
	handleFiltering: () => {}
};

export default Card;
