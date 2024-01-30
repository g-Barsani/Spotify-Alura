import React from 'react';

// ---------------------------------------------------- CSS
import './css.reset.css'
import './App.css';
import './searchBar.css';
import './footer.css'
// ---------------------------------------------------- CSS

// ---------------------------------------------------- Components
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import BrowseAll from './components/Browseall';
import Card from './components/Card';
import Footer from './components/Footer';
// ---------------------------------------------------- Components

// ---------------------------------------------------- JSON
import jsonData from './api/genres.json';
// Extract the genres array from the JSON file
const { genres } = jsonData;
// ---------------------------------------------------- JSON


function App() {
  return (
    <div className="App">
      <div className="left">
        <Sidebar/> 
      </ div>

      <div className="right">
        <div className="up"> 
          <Searchbar/> 
          <main>
            <BrowseAll content="Browse All"></BrowseAll>
            <div className="cards">
            {/* Map through each genre and create a Card component */}
            {genres.map((genre) => (
                <Card
                  // key={index} // Provide a unique key for each iteration
                  genre={{ content: genre.title }}
                  image={genre.urlImage}
                  color={genre.color}
                />
              ))}
            </div>
          </main>
        </div>
        <div className="down">
          <Footer/>
        </div>
      </div>
    </ div>
  );
}
export default App;