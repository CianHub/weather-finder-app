import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
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
    icon: undefined,
    error: undefined
  };

  getLink = img => {
    if (img) {
      let link = "http://openweathermap.org/img/w/";
      let code = img;
      let pic = link + code + ".png";
      return pic;
    }
  };

  updateValue = e => {
    document.getElementById("weather").style.opacity = 0;
  };

  getWeather = async e => {
    /* 
    1. Function fetches the openweathermap API and uses async promise function to 
    await a result.
    2. Function turns off default browser behaviour so page will not refresh on submit.
    */
    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;
    e.preventDefault();

    const api_key = "4aab7f72e73718a019e51fe267f9c349";
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}`
    );
    const response = await api_call.json();

    if (city && country) {
      document.getElementById("weather").style.opacity = 1;

      this.setState({
        // Updates the components state with data from the API

        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        img: response.weather[0].icon,
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

      <React.Fragment>
        <div className="row justify-content-center text-center transp">
          <div className="col-sm" id="title">
            <Title />
          </div>
        </div>
        <div className="row justify-content-center transp">
          <Form loadWeather={this.getWeather} newSearch={this.updateValue} />
        </div>
        <div className="row justify-content-center transp " id="weather">
          <div className="col-sm text-center">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
              img={this.getLink(this.state.img)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
