import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <div>
        <ul>
          <li id="home">
            <a href="/">
              <button type="button">Search Books</button>
            </a>
          </li>
          <li id="savedBooks">
            <a href="/">
              <button type="button">Saved Books</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
