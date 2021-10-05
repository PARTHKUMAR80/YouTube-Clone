import React from "react";
import "./App.css";
import youtubeapi from "./youtubeapi";
import VideoList from "./VideoList";
import MainVideo from "./MainVideo";
import Header from "./Header";
import Slider from "./Slider";
import MainLoading from './MainLoading';

class App extends React.Component {
  state = {
    open: true,
    videos: [],
    selectedVideo: "",
    totalDisplay: true
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("quotes");
  }

  onTermSubmit = async (term) => {
    this.setState({totalDisplay:false});
    const res = await youtubeapi.get("/search", {
      params: {
        q: term,
      },
    });
    setTimeout(() => {
      this.setState({totalDisplay:true})
      this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
    }, 2000);
  };

  openClose=()=>{
    if (this.state.open===true){
      this.setState({open:false})
    }
    else {
      this.setState({open:true})
    }
  }

  render() {
    return (
      <>
        <Header onFormSubmit={this.onTermSubmit} openClose={this.openClose} />
        {this.state.totalDisplay ? 
          (<div className="big-div">
          <Slider open={this.state.open}/>
          <div className="small-div-1">
            <MainVideo video={this.state.selectedVideo} />
          </div>
          <div className="small-div-2">
            <VideoList
              videos={this.state.videos}
              onSelectVideo={this.onSelectVideo}
            />
          </div>
        </div>)
          : (<MainLoading/>)
        }
      </>
    );
  }
}

export default App;
