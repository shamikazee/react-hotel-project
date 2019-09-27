import React from "react";
import logo from "../images/logo.svg";
import logo2 from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  handleTogle = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo2} style={{ margin: 17 }} />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleTogle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
