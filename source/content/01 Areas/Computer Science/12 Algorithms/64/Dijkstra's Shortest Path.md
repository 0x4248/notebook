---
tags:
  - computer_science/12
date: 2025-03-01
aliases:
  - dijkstra's shortest path
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---
# Dijkstra's Shortest Path

***
Dijkstra's algorithm finds the **shortest path between two nodes in a graph that has weights**. Think of the weights as having lengths on the graph with a higher number needing a longer distance to get there.

## How to use Dijkstra's algorithm

1. **Start at the source node**. This is the node you are starting from.
2. **Find the node with the smallest weight**. This is the node that is closest to the source node.
3. **Update the weights of the neighbouring nodes**. If the weight of the neighbouring node is less than the current weight, update it.
4. **Repeat steps 2 and 3** until you reach the destination node.
