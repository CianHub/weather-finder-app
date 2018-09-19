import React, { Component } from "react";

const Form = props => {
  // includes (props) as to enable this functional component to recieve props from a parent
  return (
    // When the form is submitted execute the function loadWeather() from the openweathermap API
    // Create a form with two inputs one for city and one for country
    <form onSubmit={props.loadWeather}>
      <input type="text" name="city" placeholder="Please Enter a City..." />
      <input
        type="text"
        name="country"
        placeholder="Please Enter a Country..."
      />
      <button>Get The Weather Forecast!</button>
    </form>
  );
};

export default Form;
