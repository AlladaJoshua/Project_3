// TMDB API Key
const apiKey = '8b19a1759bd61283e7d113a1a56e5312';

// Movie ID for "Interstellar"
const movieId = 157336;

// API URL
const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

// Fetch movie details
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Update the HTML with movie details
    document.getElementById('movie-title').innerText = data.title;
    document.getElementById('movie-poster').src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    document.getElementById('release-date').innerText = data.release_date;
    document.getElementById('overview').innerText = data.overview;
  })
  .catch(error => {
    console.error('Error fetching the movie data:', error);
    document.getElementById('movie-title').innerText = 'Failed to load movie data';
  });
