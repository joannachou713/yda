import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between">
          <a class="navbar-brand" href="/">
            <img src="./imgs/Thumbnail.png" height="50" className="mr-3" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <form class="form-inline border rounded-pill">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="你想找什麼活動呢？"
                  aria-label="Search"
                />
                <button
                  class="btn my-2 my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  青年署簡介
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  每月活動
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/explore">
                  探索活動
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li> */}
              {/* <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
