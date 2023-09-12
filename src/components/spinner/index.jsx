import "./spinner.css";

import * as React from "react";

import { CirclesWithBar } from "react-loader-spinner";

export function Spinner() {
  return (
    <div className="spinner">
      <CirclesWithBar
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    </div>
  );
}
