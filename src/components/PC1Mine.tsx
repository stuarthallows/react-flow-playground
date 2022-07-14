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
  MarkerType,
  FitViewOptions
} from 'react-flow-renderer';
import { useLayout } from '../hooks/useLayout';

// See example https://reactflow.dev/docs/examples/layout/auto-layout/
// See source https://dev.azure.com/willowdev/Twin%20Platform/_git/TwinPlatform?path=/samples/react-flow/sample-browser/src/samples/auto-layout/index.js 

export const initialNodes: Node[] = [
  {
    id: 'ext-106',
    data: { label: 'EXT-106' },
    position: { x: 0, y: 0 },
    type: 'input'
  },
  {
    id: 'ext-108',
    data: { label: 'EXT-108' },
    position: { x: 0, y: 0 },
    type: 'input'
  },  
  {
    id: 'ext-110',
    data: { label: 'EXT-110' },
    position: { x: 0, y: 0 },
    type: 'input'
  },  
  {
    id: 'ext-112',
    data: { label: 'EXT-112' },
    position: { x: 0, y: 0 },
    type: 'input'
  },  
  {
    id: 'ext-114',
    data: { label: 'EXT-114' },
    position: { x: 0, y: 0 },
    type: 'input'
  },  
  {
    id: 'ext-116',
    data: { label: 'EXT-116' },
    position: { x: 0, y: 0 },
    type: 'input'
  },
  {
    id: 'ext-118',
    data: { label: 'EXT-118' },
    position: { x: 0, y: 0 },
    type: 'input'
  },
  {
    id: 'dp-101',
    data: { label: 'DP-101' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'dp-102',
    data: { label: 'DP-102' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'dp-103',
    data: { label: 'DP-103' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'dp-104',
    data: { label: 'DP-104' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'bn-3001',
    data: { label: 'BN-3001' },
    position: { x: 0, y: 0 },
    type: 'output'
  },
];

export const initialEdges: Edge[] = [
  {
    id: '1',
    source: 'ext-106',
    target: 'dp-101',
  },
  {
    id: '2',
    source: 'ext-108',
    target: 'dp-102',
  },
  {
    id: '3',
    source: 'ext-110',
    target: 'dp-102',
  },
  {
    id: '4',
    source: 'ext-112',
    target: 'dp-103',
  },
  {
    id: '5',
    source: 'ext-114',
    target: 'dp-103',
  },
  {
    id: '6',
    source: 'ext-116',
    target: 'dp-104',
  },
  {
    id: '7',
    source: 'ext-118',
    target: 'dp-104',
  },
  {
    id: '8',
    source: 'dp-101',
    target: 'bn-3001',
  },
  {
    id: '9',
    source: 'dp-102',
    target: 'bn-3001',
  },
  {
    id: '10',
    source: 'dp-103',
    target: 'bn-3001',
  },
  {
    id: '11',
    source: 'dp-104',
    target: 'bn-3001',
  },
];

const defaultEdgeOptions = { type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } };

const fitViewOptions: FitViewOptions = {
  padding: 0.2
}

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
      fitViewOptions={fitViewOptions}
      // newly added edges get these options automatically
      defaultEdgeOptions={defaultEdgeOptions}
      >
      <Background variant={BackgroundVariant.Dots} gap={24} size={.5} />
    </ReactFlow>
  );
}

export const PC1Mine: FC = () => 
  <ReactFlowProvider>
    <AutomaticLayout />
  </ReactFlowProvider>;
