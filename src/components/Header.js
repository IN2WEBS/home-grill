import React from 'react';

const Header = (props) => {
        return (
            <header className="header">
                <h2>Menu</h2>
                <h1>Home <span>GRILL</span></h1>
                <ul>
                    <li>Orders</li>
                    <li>Statistics</li>
                    <li>Settings</li>
                </ul>
            </header>
        );
};

export default Header;
