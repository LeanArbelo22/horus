import React from 'react';
import FakeLogo from '../../assets/img/logo-fake.png';
import './Header.scss';

function Header({openMenu, setOpenMenu}) {
  const isOpen = openMenu ? 'active' : '';

  return (
    <div className="header">
        <div className="wrapper">
            <div className="logo">
                <img src={FakeLogo} alt="logo" />
                <span>Logo y marca</span>
            </div>
            <div className={`hamburguer ${isOpen}`} onClick={() => setOpenMenu(!openMenu)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    </div>
  )
}

export default Header;