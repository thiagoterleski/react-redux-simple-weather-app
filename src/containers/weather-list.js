import React,{Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeaterList extends Component {
  renderWheater(cityData) {
    const name = cityData.city.name;
    const { lon,lat } = cityData.city.coord;

    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td className="city">
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td><Chart data={temps} color="blue" affix="C°" /></td>
        <td><Chart data={pressures} color="red" affix="hpa" /></td>
        <td><Chart data={humidities} color="grey" affix="%" /></td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWheater)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeaterList);
