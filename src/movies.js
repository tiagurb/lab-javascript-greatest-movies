// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//const allMovies = require("./data.js")  // this get's the array from the other document

function getAllDirectors(moviesArray) {
    const allMovies = [];
    moviesArray.forEach(movie => allMovies.push(movie.director));
    return allMovies
}
    



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(allMovies) {
    const stevenMovies = allMovies.filter((item) => {
        return (item.director === "Steven Spielberg" && item.genre.includes("Drama"))
        }).length;
    return stevenMovies;
};
howManyMovies(allMovies)

    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    } else {
    const result = moviesArray.filter(item => item.score).reduce((accumulator, currentValue) => 
    accumulator + currentValue.score, 0) / moviesArray.length;
    return Number (result.toFixed(2));
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaMovies = moviesArray.filter(item =>item.genre.includes("Drama"));
    return scoresAverage(dramaMovies);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copy = [...moviesArray];
    copy.sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.year === b.year) return a.title.localeCompare(b.title)
    })
    return copy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copy = [...moviesArray.title];
    copy.sort((a, b) => {
        return a.title.localeCompare(b.title);
    })
    
    copy.splice(0, 19);
    if (copy.length > 19) {
        return copy;
    } else if (copy.length < 20) {
        return moviesArray.title;
    }
}

    
    /*const copy = [...moviesArray.splice(0, 19)];
    if (copy.length > 19) {
    copy.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })}
    else {
        return moviesArray
    }
}*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
