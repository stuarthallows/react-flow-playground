import { useMemo } from 'react';
import { Node, Edge, Position } from 'react-flow-renderer';
import dagre from 'dagre';


// RF Dagre layout: https://reactflow.dev/docs/examples/layout/dagre/
// Dagre: https://github.com/dagrejs/dagre
// Elkjs: https://github.com/kieler/elkjs

// the layout direction (T = top, R = right, B = bottom, L = left, TB = top to bottom, ...)
export type Direction = 'TB' | 'LR' | 'RL' | 'BT';

export type Options = {
  direction: Direction;
};

const dagreGraph = new dagre.graphlib!.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 100;
const nodeHeight = 50;

const positionMap = {
  T: Position.Top,
  L: Position.Left,
  R: Position.Right,
  B: Position.Bottom,
};

function layoutGraph(nodes: Node[], edges: Edge[], { direction = 'TB' }: Options) {
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((el) => {
    dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((el) => {
    dagreGraph.setEdge(el.source, el.target);
  });

  dagre.layout(dagreGraph);

  return nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = positionMap[direction[0] as keyof typeof positionMap];
    node.sourcePosition = positionMap[direction[1] as keyof typeof positionMap];

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });
}

/** This hook uses a Dagre Tree layout.
 *  React Flow docs say Dagre is good for simple layouts, but that elkjs is better for more advanced layouts.
 * */
export const useLayout = (nodes: Node[], edges: Edge[], options: Options) =>
  useMemo(() => layoutGraph(nodes, edges, options), [nodes, edges, options]);
