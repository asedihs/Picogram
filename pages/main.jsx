import React from 'react';
import Icon from '../components/icon.jsx';
import Logo from '../components/logo.jsx';
import Menu from '../components/menu.jsx';
import Like from '../components/Like.jsx';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <Icon />
          <Logo name="Aleksejs" />
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />
          <Like />
        </main>
        <footer className="footer">
          <p>&copy; 2017 Aleksejs Sedihs</p>
        </footer>
      </div>
    );
  }
}

export default Main;
