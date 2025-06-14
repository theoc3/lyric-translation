import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Translate from './pages/Translate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </Router>
  );
}

export default App;