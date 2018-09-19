import React, { Component } from "react";
import "./App.css";
import Title from "./components/title.jsx";
import Form from "./components/form.jsx";
import Weather from "./components/weather.jsx";

class App extends React.Component {
  // Creates the App component class by extending it from the the React Component

  getWeather = async () => {
    const api_key = "4aab7f72e73718a019e51fe267f9c349";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${api_key}`
    );
    const response = await api_call.json();
    console.log(response);
  };
  render() {
    return (
      // Renders a div containing the Apps main components
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
}
export default App;
