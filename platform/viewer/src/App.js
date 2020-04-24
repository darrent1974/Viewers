import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  const shouldUseHashRouter = JSON.parse(process.env.REACT_APP_USE_HASH_ROUTER);
  const RouterComponent = shouldUseHashRouter ? HashRouter : BrowserRouter;
  return <RouterComponent>{routes()}</RouterComponent>;
}

export default App;
