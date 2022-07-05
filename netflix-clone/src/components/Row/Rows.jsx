import React from "react";
import Row from './Row'
import request from "../../request";

const Rows = () => {
  return (
    <div>
      <Row
        title="Netflix ORIGINALS"
        fetch={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetch={request.fetchTrending} />
      <Row title="Comedy Movies" fetch={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetch={request.fetchRomanceMovies} />
      <Row title="Action Movies" fetch={request.fetchActionMovies} />
      <Row title="Documnetaries" fetch={request.fetchDocumentariesMovies} />
      <Row title="Top Rated" fetch={request.fetchTopRated} />

    </div>
  );
};

export default Rows;
