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
    id: 'fd-3021',
    data: { label: 'FD-3021', type: 'fd', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'rb-3021',
    data: { label: 'RB-3021', type: 'rb' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'cr-3021',
    data: { label: 'CR-3021', type: 'cr' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'bn-3121',
    data: { label: 'BN-3121', type: 'bn' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'fd-3031',
    data: { label: 'FD-3031', type: 'fd' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'cv-3021',
    data: { label: 'CV-3021', type: 'cv' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'cv-3025',
    data: { label: 'CV-3025', type: 'cv', input: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  }
];

export const initialEdges: Edge[] = [
  {
    id: '1',
    source: 'fd-3021',
    target: 'rb-3021',
  },
  {
    id: '2',
    source: 'rb-3021',
    target: 'cr-3021',
  },
  {
    id: '3',
    source: 'cr-3021',
    target: 'bn-3121',
  },
  {
    id: '4',
    source: 'bn-3121',
    target: 'fd-3031',
  },
  {
    id: '5',
    source: 'fd-3031',
    target: 'cv-3021',
  },
  {
    id: '6',
    source: 'cv-3021',
    target: 'cv-3025',
  }
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

export const PC1CX: FC = () => 
  <ReactFlowProvider>
    <AutomaticLayout />
  </ReactFlowProvider>;
