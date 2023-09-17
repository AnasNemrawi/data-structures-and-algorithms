# Graphs (graph business trip)

> to run (node index.js)

## Problem Domain
> Write a method for the Graph class called business trip that takes graph array of city names and Return the cost of the trip (if it’s possible) or null (if not) Determine whether the trip is possible with direct flights, and how much it would cost.
	
## Whiteboard

![Whiteboard](./Copy%20of%20Untitled.jpg)
	


## Code 

```javascript
function businessTrip(graph, cities) {
	let totalCost = 0;

	for (let i = 0; i < cities.length - 1; i++) {
		const currentCity = cities[i];
		const nextCity = cities[i + 1];

		const neighbors = graph.getNeighbors(currentCity);
		let directFlight = false;

		for (const neighbor of neighbors) {
			if (neighbor.end.value === nextCity) {
				totalCost += neighbor.weight;
				directFlight = true;
				break; 
			}
		}

		if (!directFlight) {
			return null;
		}
	}

	return totalCost;
}
```
## Algorithm

1. Initialize a variable to keep track of the total cost of the trip.
2. Iterate through the array of city names, checking if there is a direct flight between each consecutive pair of cities.
3. If a direct flight exists between two cities, add the cost of that flight to the total cost.
4. If there is no direct flight between any pair of cities, return null indicating that the trip is not possible.
5. After iterating through all the city names, return the total cost of the trip.
