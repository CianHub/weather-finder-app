import React from "react";

const Weather = props => {
  // includes (props) as to enable this functional component to recieve props from a parent
  return (
    // Returns the weather forecast from the users query, checks if props exist first
    <div>
      {props.country &&
        props.city && (
          <p>
            Location: {props.city}, {props.country}
          </p>
        )}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions: {props.description}</p>}
    </div>
  );
};

export default Weather;
