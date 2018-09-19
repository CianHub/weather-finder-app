import React from "react";

const Form = props => {
  // includes (props) as to enable this functional component to recieve props from a parent
  return (
    /*
    1. When the form is submitted execute the function loadWeather() from the openweathermap API
    2. Create a form with two inputs one for city and one for country
    */

    <form id="app-form" className="text-center" onSubmit={props.loadWeather}>
      <div className="form-group">
        <input
          className="form-control font-two"
          type="text"
          name="city"
          placeholder="City..."
          onKeyDown={props.newSearch}
          required
        />
      </div>
      <div className="form-group">
        <input
          className="form-control font-two"
          type="text"
          name="country"
          placeholder="Country..."
          onKeyDown={props.newSearch}
          required
        />
      </div>
      <button className="font-two lead btn btn-outline-light">
        Find The Weather
      </button>
    </form>
  );
};

export default Form;
