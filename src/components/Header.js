import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Collapse için gerekli


const Header = () => {
  const location = useLocation();
  const handleNavItemClick = () => {
    const collapseEl = document.getElementById('navbarNav');
    if (collapseEl) { 
      const collapse = window.bootstrap.Collapse.getInstance(collapseEl) || new window.bootstrap.Collapse(collapseEl);
      collapse.hide();
    }
  };
  

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
            {[
              { label: 'Ana Sayfa', path: '/' },
              { label: 'Etkinlikler', path: '/weekly-plans' },
              { label: '💌 Mesaj', path: '/message' },
              { label: '🎁 Oyun', path: '/mini-game' },
              { label: '🧩 Kalbi Bul', path: '/game/find-heart' },
              { label: '🐣 Beni Hangisi Tanımlar?', path: '/game/who-am-i' },
              { label: '💘 Kalbi Sürükle', path: '/game/drag-heart' }
            ].map(({ label, path }) => (
              <li key={path} className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === path ? 'active text-white bg-danger rounded' : ''}`}
                  to={path}
                  onClick={handleNavItemClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
