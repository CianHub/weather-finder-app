import React from "react";

const Weather = props => {
  // includes (props) as to enable this functional component to recieve props from a parent

  const firstLetterCap = text => {
    if (text) {
      return (text = text
        .toLowerCase()
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" "));
    }
  };
  return (
    // Returns the weather forecast from the users query, checks if props exist first
    <React.Fragment>
      <div id="break-arrow">
        <img
          alt="arrow"
          src="https://png.icons8.com/material-sharp/50/ffffff/expand-arrow.png"
        />
      </div>
      <div className="col-sm">
        {props.country &&
          props.city && (
            <h2 className="font-two weather-class">
              {props.city}, {props.country}
            </h2>
          )}
        {props.temperature && (
          <h3 className="display-4" className="font-two weather-class">
            {props.temperature.toFixed(0)}
            °C
          </h3>
        )}
        {props.description && (
          <p className="font-two weather-class">
            {firstLetterCap(props.description)}
          </p>
        )}
        {props.img && <img alt="icon" src={props.img} />}
        {props.humidity && (
          <p className="font-two weather-class">{props.humidity}% humidity</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Weather;
