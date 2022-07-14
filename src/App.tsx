import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import { VeryBasicLayout } from './components/VeryBasicLayout';
import { AutoLayout } from './components/AutoLayout';
import { Navigation } from './components/Navigation';
import { PC1Mine } from "./components/PC1Mine";

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
          <Route path="basic" element={<VeryBasicLayout />} />
          <Route path="auto" element={<AutoLayout />} />
          <Route path="pc1-mine" element={<PC1Mine />} />
        </Routes>
      </div>
    </Wrapper>
  );
}

export default App;
