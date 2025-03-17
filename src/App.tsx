import { MemoryRouter, Route, Routes } from 'react-router';
import { Home } from './presentation/Home.jsx';

export function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
}
