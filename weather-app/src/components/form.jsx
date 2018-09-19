import React from "react";

const Form = props => {
  // includes (props) as to enable this functional component to recieve props from a parent
  return (
    // When the form is submitted execute the function loadWeather() from the openweathermap API
    // Create a form with two inputs one for city and one for country
    <form onSubmit={props.loadWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form>
  );
};

export default Form;
