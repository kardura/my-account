
import { Avatar, Tab, Tabs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { 
    
    LeftNavBar, 
    NavBar, 
    StyledBox,
    } from '../Styles/HeaderStyle'
    import { ThemeProvider,createTheme,styled } from '@mui/material'


    const StyledTabs=styled(Tabs)({       
        "& .MuiTabs-flexContainer":{
                justifyContent:"space-between",
                margin:"auto",
                fontSize:"1.3rem",
                gap:"45px",
        },
        '& .MuiTabs-indicator':{
          height:8,
          borderRadius:4,
        },
        '& .MuiTab-root':{
          padding:0,
          minWidth:"auto",
        } 
      })
      
      

const Header=()=> {
    const [value,setValue]=React.useState('home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

  return (
    <StyledBox>

            <NavBar>
                <LeftNavBar>
                    <div>
                        <img src={require("../Assets/ziply-logo.png")} alt="logo" />
                    </div>
                        <StyledTabs value={value} onChange={handleChange} textColor="secondary" indicatorColor='secondary'>
                            <Tab  value="home" label="Home" component={Link} to="/home" disableRipple/>
                            <Tab  value="billing" label="Billing" component={Link} to="/billing" disableRipple/>
                            {/* icon={<Avatar sx={{backgroundColor:"white",border:"1px solid green"}}><AttachMoneyIcon sx={{color:"green" }} /> </Avatar>} */}
                            <Tab value="account" label="Account" component={Link} to="/account" disableRipple/>
                            <Tab value="notifications" label="Notifications" component={Link} to="/notifications" disableRipple/>
                            <Tab value="support" label="Support" component={Link} to="/support" disableRipple/>                  
                        </StyledTabs>
                    
                </LeftNavBar>               
                        {/* <Input type='text' placeholder='Search Ziply Fiber...' />             */}
            </NavBar>
    </StyledBox>
  )
}

export default Header
