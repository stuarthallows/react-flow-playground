// src/mocks/browser.js
import { rest, setupWorker } from 'msw';
import { Node } from "react-flow-renderer";

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
    data: { label: "Default Node" },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];

export type Person = {
  birth_year: string;
  gender: string;
  name: string;
};

const luke: Person = {
  birth_year: "19BBY",
  gender: "make",
  name: "Luke Skywalker"
}

const handlers = [
  rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
    // const { graphId } = req.params;

    return res(
      ctx.status(200),
      ctx.json(luke),
    )
  }),
];


// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...handlers)

worker.printHandlers();

export { worker };

