import './App.css';
import { Navigate, Routes, Route, Link } from 'react-router-dom';
import AllNews from './pages/all-news';
import FavNews from './pages/fav-news';

function App() {
  return (
    <div>
      <h1>Hacker News</h1>
      <ul>
        <li>
          <Link to="/all">All</Link>
        </li>
        <li>
          <Link to="/my-faves">My faves</Link>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/all" />} />
          <Route path="/all" element={<AllNews />} />
          <Route path="/my-faves" element={<FavNews />} />
        </Routes>
      </div>
      <div>pagination</div>
    </div>
  );
}

export default App;
