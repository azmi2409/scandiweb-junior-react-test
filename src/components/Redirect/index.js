import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class index extends Component {
  render() {
    const shouldRedirect = true;
    return (
        <div>
        { shouldRedirect && <Navigate replace to="/all" /> }
        </div>);
  }
}
