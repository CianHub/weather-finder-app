import React from "react";

const Title = props => {
  // includes (props) as to enable this functional component to recieve props from a parent

  return (
    // Creates a function component Titles renders the website header

    <React.Fragment>
      <h1 className="display-3 text-center">
        <strong>Weather Finder</strong>
      </h1>
      <p className="lead font-two">
        Find the weather in{" "}
        <b>
          <i>your </i>
        </b>
        city
      </p>
    </React.Fragment>
  );
};

// Exports the component so it can imported

export default Title;
