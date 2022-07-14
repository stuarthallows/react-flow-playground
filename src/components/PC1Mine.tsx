import { FC, useCallback, useEffect } from 'react';
import ReactFlow, { 
  Edge, 
  Node, 
  addEdge, 
  Connection, 
  Background, 
  BackgroundVariant, 
  ReactFlowProvider, 
  useReactFlow, 
  FitViewOptions,
  useNodesState,
  useEdgesState,
  DefaultEdgeOptions,
} from 'react-flow-renderer';
import { useLayout } from '../hooks/useLayout';
import { AssetData, AssetNode } from './AssetNode';

// See example https://reactflow.dev/docs/examples/layout/auto-layout/
// See source https://dev.azure.com/willowdev/Twin%20Platform/_git/TwinPlatform?path=/samples/react-flow/sample-browser/src/samples/auto-layout/index.js 

export const initialNodes: Node<AssetData>[] = [
  {
    id: 'ext-106',
    data: { label: 'EXT-106', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'ext-108',
    data: { label: 'EXT-108', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'ext-110',
    data: { label: 'EXT-110', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'ext-112',
    data: { label: 'EXT-112', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'ext-114',
    data: { label: 'EXT-114', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'ext-116',
    data: { label: 'EXT-116', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'ext-118',
    data: { label: 'EXT-118', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'dp-101',
    data: { label: 'DP-101', type: 'dp' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'dp-102',
    data: { label: 'DP-102', type: 'dp' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'dp-103',
    data: { label: 'DP-103', type: 'dp' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'dp-104',
    data: { label: 'DP-104', type: 'dp' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'bn-3001',
    data: { label: 'BN-3001', type: 'bn', input: false },
    position: { x: 0, y: 0 },
    type: 'asset'
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

const defaultEdgeOptions: DefaultEdgeOptions = { 
  type: 'smoothstep', 
};

const fitViewOptions: FitViewOptions = {
  padding: 0.2
}

const nodeTypes = {
  asset: AssetNode
};

function AutomaticLayout() {
  const { fitView } = useReactFlow();

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // this hook handles the computation of the layout once the elements or the direction changes
  // because React Flow only needs the position of the nodes, there is no need to return the edges here
  const positionedNodes = useLayout(nodes, edges, { direction: 'LR' });

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
      nodeTypes={nodeTypes}
      >
      <Background variant={BackgroundVariant.Dots} gap={24} size={.5} />
    </ReactFlow>
  );
}

export const PC1Mine: FC = () => 
  <ReactFlowProvider>
    <AutomaticLayout />
  </ReactFlowProvider>;
