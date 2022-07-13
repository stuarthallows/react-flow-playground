// src/mocks/browser.js
import { rest, setupWorker } from 'msw';

const data = {
  firstName: "John",
  lastName: "Doe",
};

export const handlers = [
  rest.get('/graph/:graphId', (req, res, ctx) => {
    const { graphId } = req.params;

    if (graphId === "1") {
        return res(ctx.json(data));
    }
  }),
];


// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)
