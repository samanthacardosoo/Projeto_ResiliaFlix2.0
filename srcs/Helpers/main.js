let moviePart = document.querySelector ("#moviePart");
let movies = document.querySelectorAll (".overlayItems");
let searchField = document.querySelector ("#searchField");
let nameMovie = document.querySelector ("#nameMovie");

movies.forEach((film)=>{
film.addEventListener("click", () => {
    let filmName = film.id;
    let queryString = "?" + filmName;
    window.location.href = "htmls/filmes.html" + queryString;
    })  
})

searchField[1].addEventListener("click",() => {
    let filmName = searchField[0].value;
    let queryString = "?" + filmName;
    window.location.href = "htmls/filmes.html" + queryString;
})

nameMovie.addEventListener("keypress",(event) => {
    if (event.keyCode === 13) {
        searchField[1].click();
        event.preventDefault();
    } 
})

