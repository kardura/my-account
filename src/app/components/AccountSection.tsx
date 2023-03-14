
import React from 'react'
import {  Link, Outlet } from 'react-router-dom'
import { Card, CardContent,  styled, Tabs, Tab } from "@mui/material"

import { ThemeProvider,createTheme } from '@mui/material'
import Container from '@mui/material/Container'



const StyledContainer=styled(Container)({
  width:"50%",
  margin:"auto",

})


const StyledTabs=styled(Tabs)({
  "& .MuiTabs-flexContainer":{
          justifyContent:"space-between",
          flexWrap:"wrap",   
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

const theme=createTheme({
  palette:{
    primary:{
      main:"#000",
    },
    secondary:{
      main:"#098500"
    }
  },
})

 const StyledHr=styled('hr')({
  marginTop:0.4,
  height:1,
  background:"black"

})

const AccountSection=()=> {
  const [value, setValue] = React.useState("billingpreference");
  
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledContainer>
            <StyledTabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" >      
                      <Tab value="profile" label="profile" component={Link} to="/account/profile" disableRipple/>
                      <Tab value="billingpreference" label="Billing Preference" component={Link} to="/account/billingpreference" disableRipple/>
                      <Tab value="planandservices" label="Plan & Services" component={Link} to="/account/planandservices" disableRipple/>
                      <Tab value="settings" label="Settings" component={Link} to="/account/settings" disableRipple/>
                   
            </StyledTabs> 
            <StyledHr />      
                  <Card sx={{"marginTop":"50px"}}>
                    <CardContent sx={{"padding":" 30px"}}>
                      <Outlet/>
                    </CardContent>
                  </Card> 
        </StyledContainer>
      </ThemeProvider>
    </div>
  )
}

export default AccountSection
