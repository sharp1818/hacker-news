import './App.css';
import { Navigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Header from './layout/header';
import AllNews from './pages/all-news';
import FavNews from './pages/fav-news';
import ButtonComponent from './components/buttonComponent';
import PaginationComponent from './components/paginationComponent';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="app-container">
      <Header />
      <Box>
        <Link to="/all">
          <ButtonComponent pathname="/all" currentpath={currentPath} text="All" />
        </Link>
        <Link to="/my-faves">
          <ButtonComponent pathname="/my-faves" currentpath={currentPath} text="My faves" />
        </Link>
      </Box>
      <Routes>
        <Route path="/" element={<Navigate replace to="/all" />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/all" element={<AllNews />} />
        <Route path="/my-faves" element={<FavNews />} />
      </Routes>
      <PaginationComponent />
    </div>
  );
}

export default App;
