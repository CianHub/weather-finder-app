import React from "react";

const Form = props => {
  // includes (props) as to enable this functional component to recieve props from a parent
  return (
    /*
    1. When the form is submitted execute the function loadWeather() from the openweathermap API
    2. Create a form with two inputs one for city and one for country
    */

    <form onSubmit={props.loadWeather}>
      <div className="form-group">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="City..."
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="country"
            placeholder="Country..."
          />
        </div>
        <button className="lead btn btn-outline-light">Find The Weather</button>
      </div>
    </form>
  );
};

export default Form;
