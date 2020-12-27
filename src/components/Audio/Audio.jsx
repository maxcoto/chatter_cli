// npm install "react-h5-audio-player": "^1.1.0",

import AudioPlayer from "react-h5-audio-player"
import BladeRunner from 'assets/music/song.mp4'

class Player extends React.Component {
  render(){
    return (
      <div className={classes.player}>
        <AudioPlayer src={BladeRunner} loop={true} muted={false} />
      </div>
    )    
  }
}