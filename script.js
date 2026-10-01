```javascript
const searchInput = document.getElementById("searchInput");
const movies = document.querySelectorAll(".movie-card");

function searchMovies() {

    const searchText = searchInput.value.toLowerCase().trim();

    movies.forEach(movie => {

        const movieName = movie
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const movieGenre = movie
            .querySelector("p")
            .textContent
            .toLowerCase();

        if (
            movieName.includes(searchText) ||
            movieGenre.includes(searchText)
        ) {
            movie.style.display = "";
        } else {
            movie.style.display = "none";
        }

    });
}


/* ძებნა Enter ღილაკით */

searchInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        searchMovies();
    }

});


/* ფილმის Play ღილაკები */

document.querySelectorAll(".play-btn").forEach(button => {

    button.addEventListener("click", function() {

        const movieCard = this.closest(".movie-card");
        const movieName = movieCard.querySelector("h3").textContent;

        alert("🎬 " + movieName + "\n\nფილმის დეტალები მალე დაემატება!");

    });

});


/* მთავარი ღილაკი */

document.querySelector(".watch-btn").addEventListener("click", function() {

    document.querySelector("#movies").scrollIntoView({
        behavior: "smooth"
    });

});




document.querySelectorAll(".genre-list button").forEach(button => {

    button.addEventListener("click", function() {

        const genre = this.textContent.toLowerCase();

        movies.forEach(movie => {

            const movieGenre = movie
                .querySelector("p")
                .textContent
                .toLowerCase();

            if (movieGenre.includes(genre)) {
                movie.style.display = "";
            } else {
                movie.style.display = "none";
            }

        });

    });

});
```
