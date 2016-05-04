import React,{Component} from 'react';
import SearchBar from '../containers/searchbar';

export default class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React Weather</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li className="active">
              <a href="#">Forecast <span className="sr-only">(current)</span></a></li>
            </ul>
            <SearchBar />
            <ul className="nav navbar-nav navbar-right">
              <li><a href="http://openweathermap.org/">API DOCS</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};
