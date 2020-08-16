import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      },
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link> */}
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            style={{ width: '100%' }}
            // className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            {/* <div className="navbar-start has-text-centered"> */}
            <Link className="navbar-item" href="/doc/statut-SAO.pdf">
              Statut Asociatie "ASAO"
            </Link>
            <Link
              className="navbar-item"
              href="/doc/standard-ciobanesc-de-asia-centrala.pdf"
            >
              Standard Ciobanesc de Asia Centrala
            </Link>
            <Link
              className="navbar-item"
              href="/doc/standard-central-asia-shepherd-dog.pdf"
            >
              Standard Central Asia Shepherd Dog (English)
            </Link>
            {/* <Link
              className="navbar-item"
              href="/doc/procedura-dobandire-calitate-membru-ASAO.docx"
            >
              Procedura dobandire calitate membru ASAO
            </Link>
            <Link
              className="navbar-item"
              href="/doc/convocare-18-08-2020-Asociatia-SAO.docx"
            >
              <strong>Convocare 18.08.2020 - Asociatia SAO</strong>
            </Link> */}
            {/* </div> */}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
