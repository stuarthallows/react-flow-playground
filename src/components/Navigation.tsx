import { FC, Fragment } from "react";
import { Link } from "react-router-dom";

export const Navigation: FC = () => { 
  return <Fragment>
    <Link to="/graph1">
      <button>Example One</button>
    </Link>
    <Link to="/graph2">
      <button>Example Two</button>
    </Link>
  </Fragment>
};
