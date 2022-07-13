import { useCallback, useState } from 'react';
import styled from 'styled-components';

import ReactFlow, { Node, addEdge, applyEdgeChanges, applyNodeChanges, NodeChange, EdgeChange, Connection, Background, BackgroundVariant } from 'react-flow-renderer';
import { useFetch } from './hooks/useFetch';

const Wrapper = styled.div`
  height: 100vh;
`;

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

function Flow() {
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

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background variant={BackgroundVariant.Lines} gap={12} size={4} />
    </ReactFlow>
  );
}


function App() {
  const { data, error } = useFetch<any>("graph/1");

  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>
  
  return (
    <Wrapper>
      <Flow />
    </Wrapper>
  );
}

export default App;
