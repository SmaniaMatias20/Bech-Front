import './App.css';
import Home from './components/custom/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppSidebar } from './components/custom/AppSidebar';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';

const AppContent = () => {
  return (
    <div className="flex w-full">

      <AppSidebar />
      <SidebarTrigger />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
};

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </Router>
  );
}

export default App;
