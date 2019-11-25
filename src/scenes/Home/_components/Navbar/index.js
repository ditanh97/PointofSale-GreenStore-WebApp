import React from 'react';
import './index.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
//storing toolbar
//use parantheses to return one val

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            {/* segment for add flexbox to position elements of toolbar */}
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>{/* leftbar */}
            <div className="toolbar_logo"><a href="/home">GREEN STORE</a></div> {/* link to the root path */}
            {/* right bar */}
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                {/* unordered list to hold navigation item */}
                <ul>
                    <li><a href="/category-setting">Category Setting</a></li>
                    <li><a href="/product-database">Products Database</a></li> {/* u can use anchor tag, or router */}
                    <li><a href="/order">Order</a></li>
                    
                </ul>
            </div>

        </nav>
    </header>
)

export default Toolbar;