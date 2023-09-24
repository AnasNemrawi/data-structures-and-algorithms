'use strict';

const Edge = require("./Edge");
const Vertex = require("./Vertex");


class Graph {
	constructor() {
		this.adjacencyList = new Map();
	}

	addVertex(vertex) {
		this.adjacencyList.set(vertex, []);
	}

	addEdge(start, end, weight) {
		if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
			console.log('Both start and end vertices must exist in the graph to add an edge.');
			return;
		}

		const startVertexEdges = this.adjacencyList.get(start);
		const edge = new Edge(end, weight);

		startVertexEdges.push(edge);
	}

	getVertices() {
		return Array.from(this.adjacencyList.keys());
	}

	getNeighbors(vertex) {
		if (!this.adjacencyList.has(vertex)) {
			console.log('Vertex does not exist in the graph.');
			return null;
		}

		return this.adjacencyList.get(vertex);
	}

	size() {
		return this.adjacencyList.size;
	}

	depthFirst(node) {
		if (!this.adjacencyList.has(node)) {
			return null;
		}

		const visited = new Set();
		const result = [];

		const dfs = (currentNode) => {
			visited.add(currentNode);
			result.push(currentNode);

			const neighbors = this.adjacencyList.get(currentNode);

			for (const neighbor of neighbors) {
				if (!visited.has(neighbor.end)) {
					dfs(neighbor.end);
				}
			}
		};

		dfs(node);
		return result;
	}
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

console.log('Vertices:', graph.getVertices());
console.log('Neighbors of Vertex 2:', graph.getNeighbors(two));
console.log('Graph Size:', graph.size());


const depthFirstTraversal = graph.depthFirst(one);
console.log('Depth-First Traversal:', depthFirstTraversal);

module.exports = Graph;