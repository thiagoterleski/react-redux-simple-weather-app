import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWheater } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term:''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }
  onFormSubmit(event) {
    event.preventDefault();
    // we need to go and fetch weather data,
    console.log(event);
    this.props.fetchWheater(this.state.term);
    this.setState({term:''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="navbar-form navbar-left">
      <div className="form-group">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          className="form-control input-search"
          placeholder="Get a five-day forecast in your favorite cities" />
        </div>
          <button type="submit" className="btn btn-default">
          Search
          </button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWheater },dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);
