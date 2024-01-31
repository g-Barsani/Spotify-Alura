import React, { useState } from 'react';

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
  const [searchQuery, setSearchQuery] = useState('');

  // Filter genres based on the search query
  const filteredGenres = genres.filter((genre) =>
    genre.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <div className="up">
          <Searchbar
            // Pass setSearchQuery as a prop to update the searchQuery state
            onSearch={(query) => setSearchQuery(query)}
          />
          <main>
            <BrowseAll content="Browse All"></BrowseAll>
            <div className="cards">
              {filteredGenres.map((genre) => (
                <Card
                  key={genre.id} // Use a unique key for each genre
                  genre={{ content: genre.title }}
                  image={genre.urlImage}
                  color={genre.color}
                />
              ))}
            </div>
          </main>
        </div>
        <div className="down">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;