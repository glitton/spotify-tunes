import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
  render() {
    const track = this.props.track;
    return (
      <div className="TrackList">
        {track.map(track => {
          return (
            <Track
              key={track.id}
              name={track.name}
              artist={track.artist}
              album={track.album}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
