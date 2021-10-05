import React from "react";
import logo from "./Images/logo.jpg";
import mic from "./Images/mic.jpg";
import more from "./Images/more.png";
import profile from "./Images/profile.png";
import slider from "./Images/slider.png";

class Header extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  func1=()=>{
    this.props.openClose();
  }

  render() {
    return (
      <>
        <header>
          <div className="div-1">
            <div>
              <img onClick={this.func1} id="slider-img" src={slider} alt="" />
            </div>
            <div>
              <img id="logo-img" src={logo} alt="" />
            </div>
          </div>
          <div className="div-2">
            <form onSubmit={this.onSubmit}>
                <input
                  type="search"
                  className="form-control"
                  placeholder="search..."
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
            </form>
            <div>
              <img src={mic} alt="" />
            </div>
          </div>
          <div className="div-3">
            <div>
              <img id="more-img" src={more} alt="" />
            </div>
            <div>
              <img id="profile-img" src={profile} alt="" />
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
