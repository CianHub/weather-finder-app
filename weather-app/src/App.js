import React, { Component } from "react";
import "./App.css";
import Title from "./components/title.jsx";
import Form from "./components/form.jsx";
import Weather from "./components/weather.jsx";

class App extends React.Component {
  // Creates the App component class by extending it from the the React Component

  state = {
    // Init the state with the relevant data to be pulled from the openweathermap API blank

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    /* 
    1. Function fetches the openweathermap API and uses async promise function to 
    await a result.
    2. Function turns off default browser behaviour so page will not refresh on submit.
    */

    const city = e.target.elements.city.value;
    console.log(e.target.elements);

    const country = e.target.elements.country.value;
    e.preventDefault();

    const api_key = "4aab7f72e73718a019e51fe267f9c349";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`
    );
    const response = await api_call.json();

    if (city && country) {
      this.setState({
        // Updates the components state with data from the API
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please Enter a Valid City and Country"
      });
    }
  };
  render() {
    return (
      /* 
      1. Renders a div containing the Apps main components
      2. Passes the components getWeather function to the form
      3. Passes data from the state to the weather, 
      this will pass the API data after a search is done 
      */

      <div>
        <Title />
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
