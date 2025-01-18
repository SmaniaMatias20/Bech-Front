import './App.css';
import Home from './components/custom/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
