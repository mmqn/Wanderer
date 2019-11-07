import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { expand, stack } from "./elements";

const MobileOptionsMenu = ({
	appliedFilters,
	handleRemoveFilter,
	handleCardsDensity,
	handleCardsStacking
}) => {
	const [openMenu, setOpenMenu] = useState(false);

	const hasAppliedFilters = appliedFilters.length > 0;

	useEffect(() => setOpenMenu(false), [hasAppliedFilters]);

	return (
		<div
			style={openMenu && hasAppliedFilters ? { height: "110px" } : {}}
			className="mobile-command-bar"
			onClick={() => setOpenMenu(hasAppliedFilters && !openMenu)}
		>
			<div>
				{hasAppliedFilters && (
					<button
						style={{ float: "left", paddingTop: "13px", paddingLeft: "14px" }}
					>
						<span style={{ color: "#e4c200" }}>{appliedFilters.length}</span>
						<span key={`flash-${appliedFilters.length}`} className="flash">
							{appliedFilters.length > 1 ? " Active Filters" : " Active Filter"}
						</span>
					</button>
				)}

				<span
					style={{ float: "right", paddingTop: "2px", paddingRight: "10px" }}
				>
					<button style={{ padding: "8px" }} onClick={handleCardsDensity}>
						{expand}
					</button>
					<button style={{ padding: "8px" }} onClick={handleCardsStacking}>
						{stack}
					</button>
				</span>
			</div>

			{hasAppliedFilters && (
				<div
					style={{
						display: "flex",
						flexWrap: "nowrap",
						overflow: "scroll",
						margin: "50px 15px 0px"
					}}
				>
					{appliedFilters.map(filter => (
						<div
							key={`${filter.targetFilterType}-${filter.targetFilterValue}`}
							style={{}}
							className="filter-type-value-set delete"
							role="button"
							onClick={ev => {
								ev.stopPropagation();
								handleRemoveFilter(filter);
							}}
						>
							<div className="filter-type">{filter.targetFilterType}</div>
							<div className="filter-value">{filter.targetFilterValue}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

MobileOptionsMenu.propTypes = {
	appliedFilters: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			targetFilterType: PropTypes.string,
			targetFilterValue: PropTypes.string
		})
	).isRequired,
	handleRemoveFilter: PropTypes.func.isRequired,
	handleCardsDensity: PropTypes.func.isRequired,
	handleCardsStacking: PropTypes.func.isRequired
};

export default MobileOptionsMenu;
