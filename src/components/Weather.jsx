import React from "react";

const Weather = ({ city, country, humidity, desc, temperature, error }) => {
  return (
    <div className="weather__info">
      {city && country && (
        <p className="weather__key">
          Location:
          <span className="weather__value">
            {city}, {country}
          </span>
        </p>
      )}
      {temperature && (
        <p className="weather__key">
          Temperature: <span className="weather__value">{temperature}</span>
        </p>
      )}
      {humidity && (
        <p className="weather__key">
          Humidity: <span className="weather__value">{humidity}</span>
        </p>
      )}
      {desc && (
        <p className="weather__key">
          Conditions: <span className="weather__value">{desc}</span>
        </p>
      )}
      {error && <p className="weather__error">{error}</p>}
    </div>
  );
};

export default Weather;
