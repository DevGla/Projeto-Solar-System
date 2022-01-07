import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div>
        <p data-testid="mission-card">
          <span data-testid="mission-name">{name}</span>
          <span data-testid="mission-year">{year}</span>
          <span data-testid="mission-country">{country}</span>
          <span data-testid="mission-destination">{destination}</span>
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};

export default MissionCard;
