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

    <div>
      {props.country &&
        props.city && (
          <p>
            Location: {props.city}, {props.country}
          </p>
        )}
      {props.temperature && <p>Temperature: {props.temperature}° </p>}
      {props.humidity && <p>Humidity: {props.humidity}%</p>}
      {props.description && (
        <p>Conditions: {firstLetterCap(props.description)}</p>
      )}
    </div>
  );
};

export default Weather;
