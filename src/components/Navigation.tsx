import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: .5rem;  
`;

export const Navigation: FC = () => { 
  return <Wrapper>
    <Link to="/graph1">
      <button>Example One</button>
    </Link>
    <Link to="/graph2">
      <button>Example Two</button>
    </Link>
  </Wrapper>
};
