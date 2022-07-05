const API_KEY = '0348fafb60978c204219556020b5330f'


const request = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchTopRated: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentariesMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,


}

export default request