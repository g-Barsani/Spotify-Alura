import React from 'react';

export default function Searchbar({ onSearch }) {
  const handleInputChange = (event) => {
    const searchQuery = event.target.value;
    // Call the onSearch prop with the current search query
    onSearch(searchQuery);
  };

  return (
    <div>
      <form className="searchbar">
        <div id="logo-searchbar">
          <img id="logo" src="goblify-logo.png" alt="Goblify logo" />
          <label className="goblify-label" htmlFor="searchInput">
            Goblify
          </label>
          <div id="search">
            {/* Attach onChange event to the input field */}
            <input
              type="search"
              id="searchInput"
              placeholder="What do you want to listen to?"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div id="profile">
          <a href="" className="signup">
            Sign up
          </a>
          <button className="signin">Log in</button>
        </div>
      </form>
    </div>
  );
}
