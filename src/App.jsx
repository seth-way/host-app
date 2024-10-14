import './App.css';
import { lazy, Suspense } from 'react';
const Board = lazy(() => import('chess_components/Board'));

function App() {
  return (
    <>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Board />
      </Suspense>
    </>
  );
}

export default App;
