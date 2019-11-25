import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import SideDrawer  from './_components/SideDrawer';
import Toolbar  from './_components/Navbar';
import Backdrop from './_components/Backdrop';
import ProductsTable from './ProductPage';
import Order from './OrderPage';
import CategoriesTable from './CategoryPage';
// import './index.css';

export const Home = () => {
    const [state, setState] = useState({sideDrawerOpen: false})

    const drawerToggleClickHandler = () => {
        setState((prevState) =>{ return {sideDrawerOpen: !prevState.sideDrawerOpen}})
    }

    const backdropClickHandler =() => {
        setState({sideDrawerOpen: false})
    }


    var backdrop;
    if (state.sideDrawerOpen) {
        backdrop = <Backdrop click={backdropClickHandler}/> 
    }

    return (
        <div style={{height: '100%'}}>
            <Toolbar drawerClickHandler={drawerToggleClickHandler}/>
            <SideDrawer show={state.sideDrawerOpen}/>
            {backdrop}
            <main style={{marginTop: '64px'}}>
                {/* <Route exact path="/home" component={Welcome} /> */}
                <Route path="/order" component={Order} />
                <Route path="/product-database" component={ProductsTable} />
                <Route path="/category-setting" component={CategoriesTable} />
            </main>
        </div>
    )
}

export default Home
