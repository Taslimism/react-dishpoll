import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';

const Home = lazy(() => import('./pages/Home'));
const Results = lazy(() => import('./pages/Results'));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
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
