import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="inputtxt">Image Search </label>
            <div className="ui icon input">
              <i className="search icon"></i>
              <input
                id="inputtxt"
                type="text"
                value={this.state.term}
                placeholder="Search..."
                onChange={event => this.setState({ term: event.target.value })}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
