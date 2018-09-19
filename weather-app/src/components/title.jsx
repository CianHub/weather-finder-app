import React from "react";

const Title = props => {
  // includes (props) as to enable this functional component to recieve props from a parent

  return (
    // Creates a function component Titles renders the website header

    <div className="row">
      <div className="col-sm">
        <h1 className="display-3">Should I Go Outside?</h1>
        <p className="lead">Find the weather in your city</p>
      </div>
    </div>
  );
};

// Exports the component so it can imported

export default Title;
