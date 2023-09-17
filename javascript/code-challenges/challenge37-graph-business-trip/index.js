'use strict';

const Graph = require('./Graphs');
const Vertex = require('./Vertex');

function businessTrip(graph, cities) {
	let totalCost = 0;

	for (let i = 0; i < cities.length - 1; i++) {
		const currentCity = cities[i];
		const nextCity = cities[i + 1];

		const neighbors = graph.getNeighbors(currentCity);
		let directFlightExists = false;

		for (const neighbor of neighbors) {
			if (neighbor.end.value === nextCity) {
				totalCost += neighbor.weight;
				directFlightExists = true;
				break; // Break the loop if a direct flight is found.
			}
		}

		if (!directFlightExists) {
			return null; // No direct flight found, trip is not possible.
		}
	}

	return totalCost;
}
