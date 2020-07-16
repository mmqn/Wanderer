import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { expand, stack } from '../components/icons';

const MobileOptionsMenu = ({
  appliedFilters,
  handleRemoveFilter,
  handleToggleCardsDensity,
  handleToggleStackedView,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  const hasAppliedFilters = appliedFilters.length > 0;

  useEffect(() => {
    setOpenMenu(false);
  }, [hasAppliedFilters]);

  const handleOpenMenu = () => setOpenMenu(hasAppliedFilters && !openMenu);

  return (
    <div
      style={openMenu && hasAppliedFilters ? { height: '110px' } : {}}
      className='mobile-command-bar'
      onClick={handleOpenMenu}
    >
      <div>
        {hasAppliedFilters && (
          <button
            type='button'
            style={{ float: 'left', paddingTop: '13px', paddingLeft: '14px' }}
          >
            <span style={{ color: '#e4c200' }}>{appliedFilters.length}</span>

            <span key={`flash-${appliedFilters.length}`} className='flash'>
              {appliedFilters.length > 1 ? ' Active Filters' : ' Active Filter'}
            </span>
          </button>
        )}

        <span
          style={{ float: 'right', paddingTop: '2px', paddingRight: '10px' }}
        >
          <button
            type='button'
            style={{ padding: '8px' }}
            onClick={handleToggleCardsDensity}
          >
            {expand}
          </button>

          <button
            type='button'
            style={{ padding: '8px' }}
            onClick={handleToggleStackedView}
          >
            {stack}
          </button>
        </span>
      </div>

      {hasAppliedFilters && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflow: 'scroll',
            margin: '50px 15px 0px',
          }}
        >
          {appliedFilters.map(filter => (
            <div
              key={`${filter.targetFilterType}-${filter.targetFilterValue}`}
              style={{}}
              className='filter-typevalue delete'
              role='button'
              onClick={e => {
                e.stopPropagation();
                handleRemoveFilter(filter);
              }}
            >
              <div className='filter-type'>{filter.targetFilterType}</div>

              <div className='filter-value'>{filter.targetFilterValue}</div>
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
      targetFilterValue: PropTypes.string,
    }),
  ).isRequired,
  handleRemoveFilter: PropTypes.func.isRequired,
  handleToggleCardsDensity: PropTypes.func.isRequired,
  handleToggleStackedView: PropTypes.func.isRequired,
};

export default MobileOptionsMenu;
