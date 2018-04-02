import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [
        {
          name: "Holiday",
          artist: "Madonna",
          album: "Holday"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>
          My<span className="highlight">Tu</span>nes
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
