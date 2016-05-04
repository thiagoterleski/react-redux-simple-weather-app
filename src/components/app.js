import React from 'react';
import { Component } from 'react';
import NavBar from '../components/navbar';
import WeaterList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div className="application">
        <NavBar />

        <WeaterList/>
      </div>
    );
  }
}
