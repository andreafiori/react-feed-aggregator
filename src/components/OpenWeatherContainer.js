import React, { Component } from 'react';
import OpenWeather from './OpenWeather';
import OpenWeatherForm from './OpenWeatherForm';

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class OpenWeatherContainer extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    /* console.log(response); */
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        error: 'Please input search values...'
      });
    }
  }

  render() {

    return (

      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-lg-12 title-container">
                  <h3>Weather</h3>
                  <p>Search Weather for City and Country</p>
                </div>
                <div className="col-xs-12 col-lg-12 form-container">
                <OpenWeatherForm loadWeather={this.getWeather} />
                  <OpenWeather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default OpenWeatherContainer;
