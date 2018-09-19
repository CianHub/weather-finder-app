import React from "react";

const Title = props => {
  // includes (props) as to enable this functional component to recieve props from a parent
  return (
    // Creates a function component Titles renders the website header
    <div>
      <h1>Weather App</h1>
      <p> Helps you find weather conditions in cities</p>
    </div>
  );
};

// Exports the component so it can imported
export default Title;
