import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Results = lazy(() => import('./pages/Results'));

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/poll"
        element={
          <Suspense fallback="Loading ...">
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/results"
        element={
          <Suspense fallback="Loading ...">
            <Results />
          </Suspense>
        }
      />
    </Routes>
  </Router>
);

export default App;
