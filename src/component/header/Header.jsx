import React from 'react';
import './header.css';
import logo from './../../../public/logo.png';

const Header = () => {
    return (
        <div>
            <header>
                <div className='writer'>

                   <div className="logo">
                   <img src={logo} alt="" />
                   <h2>Fevorite writers</h2>
                   </div>
                    <div className="txt">
                    <h1>Favorite authors are added to favorits</h1>
                    <p>See world top writers</p>
                    </div>
                </div>
                <hr />
            </header>
        </div>
    );
};

export default Header;