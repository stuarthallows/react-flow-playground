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
import { AssetNode } from './AssetNode';

// See example https://reactflow.dev/docs/examples/layout/auto-layout/
// See source https://dev.azure.com/willowdev/Twin%20Platform/_git/TwinPlatform?path=/samples/react-flow/sample-browser/src/samples/auto-layout/index.js 

const defaultEdgeOptions: DefaultEdgeOptions = { 
  type: 'smoothstep', 
};

const fitViewOptions: FitViewOptions = {
  padding: 0.2
}

const nodeTypes = {
  asset: AssetNode
};

type LayoutProps = {
  initialNodes: Node[];
  initialEdges: Edge[];
}

const AutomaticLayout: FC<LayoutProps> = ({initialNodes, initialEdges}: LayoutProps) => {
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

type Props = {
  nodes: Node[];
  edges: Edge[];
}

export const AutoLayout: FC<Props> = ({nodes, edges}: Props) => 
  <ReactFlowProvider>
    <AutomaticLayout initialNodes={nodes} initialEdges={edges} />
  </ReactFlowProvider>;
