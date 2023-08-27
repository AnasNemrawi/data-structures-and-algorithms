'use strict'

class Movie {
	constructor(title, year, genres) {
		this.title = title
		this.year = year
		this.genres = genres
	}
}

function sortByYear(movies) {
	return movies.slice().sort((a, b) => b.year - a.year);
}

function sortByTitle(movies) {
	const ignored = title => title.replace(/^(A|An|The) /i, "");
	return movies.slice().sort((a, b) => ignored(a.title).localeCompare(ignored(b.title)));
}

const movies = [
	new Movie("The Dark Knight", 2008, ["Action"]),
	new Movie("Forrest Gump", 1994, ["Drama"]),
	new Movie("The Shawshank Redemption", 1994, ["Drama"]),
	new Movie("Pulp Fiction", 1994, ["Crime"]),
	new Movie("The Matrix", 1999, ["Sci-Fi"]),
];


const Year = sortByYear(movies);
const Title = sortByTitle(movies);

console.log("Sorted by most recent year first:");
console.log(Year);

console.log("Sorted alphabetically ignoring (“A”s, “An”s, and “The”s):");
console.log(Title);

module.exports = {
	sortByYear, sortByTitle, Movie
}