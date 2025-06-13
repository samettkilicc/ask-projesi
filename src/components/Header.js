import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold text-danger">💖 Merve'ye Özel</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active text-white bg-danger rounded' : ''}`} to="/">Ana Sayfa</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/weekly-plans' ? 'active text-white bg-danger rounded' : ''}`} to="/weekly-plans">Etkinlikler</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/message' ? 'active text-white bg-danger rounded' : ''}`} to="/message">💌 Mesaj</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/mini-game' ? 'active text-white bg-danger rounded' : ''}`} to="/mini-game">🎁 Oyun</Link>
            </li>
            <Link to="/game/find-heart" className="nav-link">🧩 Kalbi Bul</Link>
            <Link to="/game/who-am-i" className="nav-link">🐣 Beni Hangisi Tanımlar?</Link>
            <Link to="/game/drag-heart" className="nav-link">💘 Kalbi Sürükle</Link>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
