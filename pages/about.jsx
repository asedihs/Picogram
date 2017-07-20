import React from 'react';
import Icon from '../components/icon.jsx';
import Logo from '../components/logo.jsx';
import Menu from '../components/menu.jsx';

class About extends React.Component {
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </main>
        <footer className="footer">
          <p>&copy; 2017 Aleksejs Sedihs</p>
        </footer>
      </div>
    );
  }
}

export default About;
