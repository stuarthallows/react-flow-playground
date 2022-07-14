import { Routes, Route } from "react-router-dom";

import { VeryBasicLayout } from './components/VeryBasicLayout';
import { Navigation } from './components/Navigation';
import { PC1Mine } from "./components/PC1Mine";
import { PC1CX } from "./components/PC1CX";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="w-full grow">
        <Routes>
          <Route path="basic" element={<VeryBasicLayout />} />
          <Route path="pc1-mine" element={<PC1Mine />} />
          <Route path="pc1-cx" element={<PC1CX />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
