import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <h2 className="text-white">Google Book Search</h2>
      </a>

      <div>
        <ul className="navbar-nav">
          <li id="home">
            <a className="nav-link" href="/">
              <button className="btn btn-info text-white" type="button">
                Search Books
              </button>
            </a>
          </li>

          <li id="savedBooks">
            <a className="nav-link" href="/saved">
              <button className="btn btn-success" type="button">
                Saved Books
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
