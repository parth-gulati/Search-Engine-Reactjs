import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import "./App.css";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "50px" }}>
          <div className="loading-dots">
            <i className="american sign language interpreting icon huge"></i>
            <h1 className="saving" style={{ display: "inline" }}>
              &nbsp; ImageSearcher
              <span> .</span>
              <span> .</span>
              <span> .</span>
            </h1>
          </div>
          <br />
          <SearchBar onSubmit={this.onSearchSubmit} />
          <br />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
