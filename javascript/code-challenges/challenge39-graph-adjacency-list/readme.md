# Graphs ( adjacency list)


## Problem Domain
> Write a method for the Graph class that accepts as input two nodes and a graph, represented as an adjacency list The function should traverse the graph, using any traversal method ,The traversal should start at one node, and continue until the second node is found, or the traversal is completed it return a boolean.
	
## Whiteboard

![Whiteboard](./Copy%20of%20Untitled.jpg)
	


## Code 

```javascript
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
```
## Algorithm

1. Initialize a set called visited to keep track of visited nodes.

2. Check if both the startNode and targetNode exist in the graph's adjacency list. If not, print an error message and return false.

3. Define a recursive DFS function that takes a node and the visited set as parameters.

4. In the DFS function:

a. Add the current node to the visited set to mark it as visited.

b. Check if the current node is equal to the targetNode. If yes, return true, indicating a path has been found.

c. Get the neighbors of the current node from the graph.

d. Iterate through the neighbors:

E. If a neighbor has not been visited (i.e., not in the visited set), recursively call the DFS function on the neighbor.

F. If the DFS function returns true for any neighbor, return true, indicating a path has been found.

5. If the DFS function completes without finding a path, return false.
