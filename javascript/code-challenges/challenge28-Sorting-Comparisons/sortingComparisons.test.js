'use strict';

const { sortByTitle, sortByYear, Movie } = require('./sortingComparisons')

const movies = [
	new Movie("The Dark Knight", 2008, ["Action"]),
	new Movie("Forrest Gump", 1994, ["Drama"]),
	new Movie("The Shawshank Redemption", 1994, ["Drama"]),
	new Movie("Pulp Fiction", 1994, ["Crime"]),
	new Movie("The Matrix", 1999, ["Sci-Fi"]),
];




let sortedByYear = [
	{ title: 'The Dark Knight', year: 2008, genres: ['Action'] },
	{ title: 'The Matrix', year: 1999, genres: ['Sci-Fi'] },
	{ title: 'Forrest Gump', year: 1994, genres: ['Drama'] },
	{
		title: 'The Shawshank Redemption',
		year: 1994,
		genres: ['Drama']
	},
	{ title: 'Pulp Fiction', year: 1994, genres: ['Crime'] }
]

let sortedByTitle = [
	{ title: 'The Dark Knight', year: 2008, genres: ['Action'] },
	{ title: 'Forrest Gump', year: 1994, genres: ['Drama'] },
	{ title: 'The Matrix', year: 1999, genres: ['Sci-Fi'] },
	{ title: 'Pulp Fiction', year: 1994, genres: ['Crime'] },
	{
		title: 'The Shawshank Redemption',
		year: 1994,
		genres: ['Drama']
	}
]

describe('Testing comparative sort ', () => {

	it('Returns a sorted array of movies by Year', () => {

		expect(sortByYear(movies)).toEqual(sortedByYear)
	})
	it('Returns a sorted array of movies by title', () => {

		expect(sortByTitle(movies)).toEqual(sortedByTitle)
	})
})