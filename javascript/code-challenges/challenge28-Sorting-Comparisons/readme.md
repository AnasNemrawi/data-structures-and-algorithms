# Sorting: Comparisons
> 1. write functions which sort domain objects. Your functions will receive an array of Movie objects. Each Movie object has a title (string), a year (number), and a list of genres (array of strings). One function will sort the movies by most recent year first. One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s. Test outputs for these functions, and an array of sample data, have been provided in test and movies.

> 2. In the second half of the code challenge, you will write tests for your comparator functions. This may necessitate refactoring the code you wrote in part one. Your tests will need to call the comparator functions directly, and make assertions about the response values given test inputs.
## Code
``` Javascript
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
```