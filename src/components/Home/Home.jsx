import React, {useState} from 'react';
import MessagesContainer from '../MessagesContainer/MessagesContainer.jsx';
import Header from '../Header/Header.jsx';
import Menu from '../Menu/Menu.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './Home.scss';

function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <div className="home">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Navbar />
        <MessagesContainer />
    </div>
  )
}

export default Home;