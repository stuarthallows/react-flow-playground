import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import { Graph1 } from './components/Graph1';
import { Graph2 } from './components/Graph2';
import { Navigation } from './components/Navigation';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .flow-container {
    width: 800px;
    height: 800px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Navigation />

      <div className="flow-container">
        <Routes>
          <Route path="graph1" element={<Graph1 />} />
          <Route path="graph2" element={<Graph2 />} />
        </Routes>
      </div>
    </Wrapper>
  );
}

export default App;
