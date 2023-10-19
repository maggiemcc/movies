const apiKey = 'dc7af4052f9d4bac7154f3a2847cfa06';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzdhZjQwNTJmOWQ0YmFjNzE1NGYzYTI4NDdjZmEwNiIsInN1YiI6IjY1MzA0ZmIxYTZhNGMxMDBhZDE2NjY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XwKVuqOnfA79HawVqNCSHeuKGqGHO68SDCiSwRVrako';

var searchButton = document.getElementById('search-button');
var displayResults = document.querySelector('.search-results');


function getApi(query){
    let requestUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;

    fetch(requestUrl).then(function (response){
       return response.json();
    })
    .then(function (data) {
        let movies = data.results;
        console.log(movies)

        for (let i = 0; i < movies.length; i++) {
            let movieCard = document.createElement('div');
            movieCard.className = "movie-card";
            let movieInfo = document.createElement('div');
            movieInfo.className = "movie-info";

            let title = document.createElement('h3');
            title.textContent = movies[i].title;
            let releaseDate = document.createElement('h4');
            releaseDate.textContent = movies[i].release_date;
            let overview = document.createElement('p');
            overview.textContent = movies[i].overview;
            let poster = document.createElement('img');
            poster.src = "http://image.tmdb.org/t/p/w500/" + movies[i].poster_path;

            if (movies[i].poster_path == null){
                poster.src = "/assets/placeholder.png";
            }

            displayResults.appendChild(movieCard);
            movieCard.appendChild(movieInfo);
            movieInfo.appendChild(title);
            movieInfo.appendChild(releaseDate);
            movieInfo.appendChild(overview);
            movieCard.appendChild(poster);
          }
    })
};

// Event listener for search button click
// $('#search-button').click(function () {
//     const searchInput = $('.search-bar input').val();
//     getApi(searchInput);
//   });
  

getApi();

