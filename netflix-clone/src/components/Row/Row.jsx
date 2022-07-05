import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import YouTube from "react-youtube";
const movieTrailer = require("movie-trailer"); // or import movieTrailer from 'movie-trailer'

const Row = ({ title, fetch, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [traileUrl, setTraileUrl] = useState("");
  const [close, setClose] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetch);
      setMovies(request.data.results);
      //   console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetch]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const Close=()=>{
    setTraileUrl('')
    setClose(false)
  }

  const handleClick = (data) => {
    setClose(true)
    movieTrailer(data.name || data.title)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTraileUrl(urlParams.get("v"));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }} className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies.map((data) => (
          <img
            onClick={() => handleClick(data)}
            key={data.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://www.themoviedb.org/t/p/original${
              isLargeRow ? data.poster_path : data.backdrop_path
            }`}
            alt=""
          />
        ))}
      </div>
      {close && <button onClick={()=>Close()}>Close</button>}
      {traileUrl && <YouTube videoId={traileUrl} opts={opts} />}
    </div>
  );
};

export default Row;
