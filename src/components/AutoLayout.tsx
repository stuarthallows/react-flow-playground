import { FC, useCallback, useEffect, useState } from 'react';
import ReactFlow, { 
  Edge, 
  Node, 
  addEdge, 
  applyEdgeChanges, 
  applyNodeChanges, 
  NodeChange, 
  EdgeChange, 
  Connection, 
  Background, 
  BackgroundVariant, 
  ReactFlowProvider, 
  useReactFlow, 
  MarkerType
} from 'react-flow-renderer';
import { useLayout } from '../hooks/useLayout';

// See example https://reactflow.dev/docs/examples/layout/auto-layout/
// See source https://dev.azure.com/willowdev/Twin%20Platform/_git/TwinPlatform?path=/samples/react-flow/sample-browser/src/samples/auto-layout/index.js 

export const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Node 1' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 0, y: 0 },
  },
  {
    id: '3',
    data: { label: 'Node 3' },
    position: { x: 0, y: 0 },
  },
];

export const initialEdges: Edge[] = [
  {
    id: '1->2',
    source: '1',
    target: '2',
  },
  {
    id: '1->3',
    source: '1',
    target: '3',
  },
];

const defaultEdgeOptions = { type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } };

function AutomaticLayout() {
  const { fitView } = useReactFlow();

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // this hook handles the computation of the layout once the elements or the direction changes
  // because React Flow only needs the position of the nodes, there is no need to return the edges here
  const positionedNodes = useLayout(nodes, edges, { direction: 'TB' });

  useEffect(() => {
    // every time the layout has been computed, we want to fit the view to all nodes again
    setTimeout(() => {
      // duration is used for a smooth animation
      fitView({ duration: 400 });
    }, 100);
  }, [positionedNodes, fitView]);

  return (
    <ReactFlow
      nodes={positionedNodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      // newly added edges get these options automatically
      defaultEdgeOptions={defaultEdgeOptions}
      >
      <Background variant={BackgroundVariant.Dots} gap={24} size={.5} />
    </ReactFlow>
  );
}

export const AutoLayout: FC = () => 
  <ReactFlowProvider>
    <AutomaticLayout />
  </ReactFlowProvider>;
