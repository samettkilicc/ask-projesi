import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WeeklyPlans from './pages/WeeklyPlans';
import MessagePage from './pages/MessagePage';
import MiniGame from './pages/MiniGame';
import FindHeartGame from './pages/game/FindHeartGame';
import WhoAmIGame from './pages/game/WhoAmIGame';
import DragHeartGame from './pages/game/DragHeartGame';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/mini-game" element={<MiniGame />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/weekly-plans" element={<WeeklyPlans />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/game/find-heart" element={<FindHeartGame />} />
        <Route path="/game/who-am-i" element={<WhoAmIGame />} />
        <Route path="/game/drag-heart" element={<DragHeartGame />} />
      </Routes>
    </Router>
  );
};

export default App;
