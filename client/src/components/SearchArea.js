import React, { useState } from "react";
import Usercard from "./Usercard";
import Postcard from "./Postcard";
const axios = require("axios");

function SearchArea() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]); // Will hold either users or posts
  const [searchType, setSearchType] = useState('users');

  const handleChange = (e) => {
    setText(e.target.value);
    setSearchType(e.target.value.startsWith('#') ? 'hashtags' : 'users');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Determine the appropriate endpoint based on the search type
    const endpoint = searchType === 'users' ?
      `http://localhost:5000/search/${text}` : 
      `http://localhost:5000/search/hashtag/${text.slice(1)}`; // Remove '#' for hashtags

    try {
      const response = await fetch(endpoint, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      
      if (data.status === "ok") {
        // Safely handle potentially undefined data
        setResults(data.users || data.tweets || []);
      } else {
        console.log(data.error);
        setResults([]); // Reset results on error
      }
    } catch (error) {
      console.error("Search failed", error);
      setResults([]); // Reset results on fetch error
    }
  };

  return (
    <div className="HeaderAndFeed">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder="Search users or #hashtags..."
          value={text}
          onChange={handleChange}
        />
        <button type="submit" className="tweetBtn">Search</button>
      </form>
      <div className="searchResults">
        {results.length === 0 ? (
          <h1 className="noResultsFound">No results found</h1>
        ) : (
          results.map((item) => {
            return searchType === 'users' ? (
              <Usercard
                key={item._id}
                avatar={item.avatar}
                username={item.username}
                followers={item.followers || []}
              />
            ) : (
              <Postcard
              key={item._id}
          _id={item._id} 
          content={item.content}
          hashtags={item.hashtags}
          postedBy={item.postedBy.username}
          likes={item.likes || []}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default SearchArea;
