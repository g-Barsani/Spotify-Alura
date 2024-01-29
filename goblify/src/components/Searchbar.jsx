export default function Searchbar() {
    return (
      <div>
        <form className="searchbar">
          <div id="logo-searchbar">
            <img id="logo" src="src/goblenfy.png" alt="Goblify logo" />
            <label className="goblify-label" htmlFor="searchInput">Goblify</label>
            <div id="search">
              <input type="search" id="searchInput" placeholder="What do you want to listen to" />
            </div>
          </div>
  
          <div id="profile">
            <a href="" className="signup">Sign up</a>
            <button className="signin">Log in</button>
          </div>
        </form>
      </div>
    );
}
  