import React from 'react';

import './c-header.scss';

import Virus from '../../../images/virus.svg';

const Header = () => (
  <header className="c-header">
    <div className="container c-header__inner">
      <a className="c-header__brand" href="/">
        <img width="48" src={Virus} alt="corona" />
        <span className="c-header__brand u-margin-left-small">Corona Sayaç</span>
      </a>
      <nav className="c-header__nav">
        <ul className="c-header__menu">
          <li className="c-header__menu-item">
            <a className="c-header__menu-link" href="/#charts">
              Veri Grafiği
            </a>
          </li>
          <li className="c-header__menu-item">
            <a className="c-header__menu-link" href="/#protection">
              Nasıl Korunuruz
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
