import React from "react";

class OpenWeatherForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.loadWeather} className="form-inline">
        <input type="text" className="form-control" name="city" placeholder="City..." />
        <input type="text" className="form-control" name="country" placeholder="Country..." />
        <button type="submit" className="btn btn-primary">Get Weather</button>
      </form>
    )
  }
}

export default OpenWeatherForm;
