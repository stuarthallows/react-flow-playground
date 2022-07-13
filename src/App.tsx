import { useEffect } from 'react';
import styled from 'styled-components';
import { Navigation } from './components/Navigation';
import { Person } from "./mocks/browser";
import { get } from './utils/api';
import { Routes, Route } from "react-router-dom";
import { Graph1 } from './components/Graph1';
import { Graph2 } from './components/Graph2';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .flow-container {
    width: 800px;
    height: 800px;
  }
`;

const fetchPerson = async (personId: number): Promise<Person> => {
  const url = `people/${personId}`;
  return get<Person>(url);
};


function App() {
  // const { data, error } = useFetch<Node[]>("http://localhost:4000/graph/1");

  useEffect(() => {
    fetchPerson(1)
      .then(response => console.log("got data back!!!", response))
      .catch(error => console.error("Error!!!", error));
  }, []);

  // console.log("error", error);
  // if (error) return <p>There is an error.</p>
  // if (!data) return <p>Loading...</p>

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
