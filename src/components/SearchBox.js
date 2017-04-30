import React from 'react'
 
export class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'london'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your location is ' + this.state.value)
    event.preventDefault();
  }

  render() {
    return (
    <div className="search-container">	
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          Pick up a city
	          <select value={this.state.value} onChange={this.handleChange}>
	            <option value="riodejaneiro">Rio de Janeiro</option>
	            <option value="london">London</option>
	            <option value="Blue Hills">Blue Hills</option>
	            <option value="cambridge">Cambridge</option>
	          </select>
	        </label>
	        <input type="submit" value="Check" />
	      </form>
    </div>  
    );
  }
}