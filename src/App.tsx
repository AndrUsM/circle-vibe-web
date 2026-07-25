import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import './shared/styles/index.scss';

const App = () => {
  return (
    <div className="app-page">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export const ROOT_ROUTE = createBrowserRouter([
  {
    path: '/',
    Component: App,
  }
])

export default ROOT_ROUTE;
