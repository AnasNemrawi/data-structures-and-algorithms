'use strict';

const Graph = require('./Graphs');
const Vertex = require('./Vertex');

function breadthFirst(graph, startVertex) {
	if (!startVertex) return 'Enter a valid start vertex';
	if (!graph.adjacencyList.has(startVertex)) return 'Vertex does not exist in the graph';

	const visited = new Set();
	const result = [];
	const queue = [];

	queue.push(startVertex);
	visited.add(startVertex);

	while (queue.length > 0) {
		const currentVertex = queue.shift();
		result.push(currentVertex);

		const neighbors = graph.getNeighbors(currentVertex);
		for (const neighbor of neighbors) {
			if (!visited.has(neighbor)) {
				visited.add(neighbor);
				queue.push(neighbor);
			}
		}
	}

	return result;
}

const graph = new Graph();
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);
const six = new Vertex(6);

graph.addVertex(one);
graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(four);
graph.addVertex(five);
graph.addVertex(six);
graph.addEdge(one, two);
graph.addEdge(one, three, 5);
graph.addEdge(two, four);
graph.addEdge(two, five);
graph.addEdge(four, three);
graph.addEdge(five, six);

const result = breadthFirst(graph, one);
console.log('Breadth-First Traversal:', result);
