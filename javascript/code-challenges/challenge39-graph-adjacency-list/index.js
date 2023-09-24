'use strict';

const Graph = require('./Graphs');
const Vertex = require('./Vertex');

function isNodeConnected(graph, startNode, targetNode) {

	function dfs(node, visited) {
		visited.add(node);

		if (node === targetNode) {
			return true;
		}

		const neighbors = graph.getNeighbors(node);
		for (const neighbor of neighbors) {
			if (!visited.has(neighbor.end)) {
				if (dfs(neighbor.end, visited)) {
					return true;
				}
			}
		}

		return false;
	}

	if (!graph.adjacencyList.has(startNode) || !graph.adjacencyList.has(targetNode)) {
		console.log('Both start and target nodes must exist in the graph.');
		return false;
	}

	const visited = new Set();
	return dfs(startNode, visited);
}


const graph = new Graph();

const a = new Vertex('A');
const b = new Vertex('B');
const c = new Vertex('C');
const d = new Vertex('D');
const e = new Vertex('E');
const f = new Vertex('F');
const g = new Vertex('G');

graph.addVertex(a);
graph.addVertex(b);
graph.addVertex(c);
graph.addVertex(d);
graph.addVertex(e);
graph.addVertex(f);
graph.addVertex(g);

graph.addEdge(a, b);
graph.addEdge(b, d);
graph.addEdge(c, a);
graph.addEdge(c, d);
graph.addEdge(d, b);
graph.addEdge(d, c);
graph.addEdge(d, f);
graph.addEdge(e, f);
graph.addEdge(f, e);
graph.addEdge(f, g);
graph.addEdge(g, f);

// Check if Node D is connected to Node G
const isConnected = isNodeConnected(graph, d, g);
console.log('Is Node D connected to Node G:', isConnected);
