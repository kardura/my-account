import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { 
    AccountLink, 
    LeftTopBar, 
    RightTopBar, 
    RightTopBarOne, 
    ServicesLink, 
    TopBar } from '../Styles/HeaderOneStyle';


const HeaderOne=()=> {
  return (
    <TopBar>
        
        <LeftTopBar>
            <ServicesLink to={'/'}>Services</ServicesLink>
            <AccountLink to={'/'}>My Account</AccountLink>
        </LeftTopBar>
        <RightTopBar>
            <RightTopBarOne>
                <PersonIcon/>
                <div>Welcome,</div>
                <div >Victoria</div>
            </RightTopBarOne>
            <div>Sign Out</div>
        </RightTopBar>
    </TopBar>
  )
}

export default HeaderOne
