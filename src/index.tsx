import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


function prepare() {
  // if (process.env.NODE_ENV === 'development') {
  //   const { worker } = require('./mocks/browser')
  //   return worker.start()
  // }
  return Promise.resolve()
}

// if (process.env.NODE_ENV === 'development') {
  // const { worker } = require('./mocks/browser');
  // worker.start({
  //   onUnhandledRequest(req: any) {
  //     console.error(
  //       'Found an unhandled %s request to %s',
  //       req.method,
  //       req.url.href,
  //     )
  //   },
  //  });
// // }



prepare().then(() => {

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
})

