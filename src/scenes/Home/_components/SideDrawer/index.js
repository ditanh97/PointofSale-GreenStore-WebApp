// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import React from 'react'

// const index = () => {

//     return (
//         <div>
//             <SideNav onSelect={(selected) => {
//                     // Add your code here
//                 }}
//             >
//                 <SideNav.Toggle />
//                 <SideNav.Nav defaultSelected="home">
//                     <NavItem eventKey="home">
//                         <NavIcon>
//                             <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
//                         </NavIcon>
//                         <NavText>
//                             Home
//                         </NavText>
//                     </NavItem>
//                     <NavItem eventKey="charts">
//                         <NavIcon>
//                             <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
//                         </NavIcon>
//                         <NavText>
//                             Charts
//                         </NavText>
//                         <NavItem eventKey="charts/linechart">
//                             <NavText>
//                                 Line Chart
//                             </NavText>
//                         </NavItem>
//                         <NavItem eventKey="charts/barchart">
//                             <NavText>
//                                 Bar Chart
//                             </NavText>
//                         </NavItem>
//                     </NavItem>
//                 </SideNav.Nav>
//             </SideNav>
//         </div>
//     )
// }

// export default index
import { withRouter } from 'react-router-dom';
// import InfoSnackbar from '../../components/snackbar';
import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import './index.css';
import {logout} from '../../../../services/redux/actions'

const SideDrawer = (props) => {
    var drawerClasses = 'side-drawer';
    const dispatch = useDispatch();
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    const onLogout = async (e) => {
        await dispatch(logout());
        props.history.push('/login');
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><button onClick={e=> onLogout(e)}>Logout</button></li>
            </ul>
        </nav>
    )
}

export default (withRouter(SideDrawer))
