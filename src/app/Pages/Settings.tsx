import { Avatar, Box, Grid, styled } from '@mui/material'
import React from 'react'
import { TopDiv } from './Profile'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const Input=styled('input')({
  padding:"13px 15px",
  marginTop:"8px",
   width:"85%",
    border:"1px solid #9d989880", 
    borderRadius:"8px ",
    outline:"none",
    "::placeholder":{color:"#9d989880"},
    background:"#f9f9f9fd"
})

const StyledLabel=styled('label')({
  fontSize:"20px",
  color:"#4791e7",
  gap:"200px",
 
})

const StyledDiv=styled('div')({
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    flexWrap: "wrap",
    marginRight: "20px",
    fontWeight:"200",
    color:"#4791e7",
    
})

const StyledA=styled('a')({
  color:"#4791e7",
  fontSize:"20px",
  textDecoration:"none",
})


const Settings=()=> {
  return (
    <>
      <Box sx={{ width: '100%' }}>
      <TopDiv>
        <Avatar sx={{backgroundColor:"white",border:"1px solid green"}}>
          <SettingsSuggestIcon sx={{color:"green" }}/>       
        </Avatar>
        <h3>Settings</h3>
      </TopDiv><br />
       
      <Grid  container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid sx={{whiteSpace:"pre-line"}} item xs={6}>
            <StyledDiv>
              <StyledLabel >Notifications</StyledLabel> 
              <StyledA href='#'><KeyboardArrowRightIcon sx={{fontSize:"2.5rem"}} /></StyledA>
            </StyledDiv>    
          </Grid>
          <Grid sx={{whiteSpace:"pre-line"}} item xs={6}>
            <StyledDiv>
              <StyledLabel >Marketing Communications</StyledLabel> 
              <StyledA href='#'><KeyboardArrowRightIcon sx={{fontSize:"2.5rem"}} /></StyledA>
            </StyledDiv>    
          </Grid>
          <Grid sx={{whiteSpace:"pre-line"}} item xs={6}>
            <StyledDiv>
              <StyledLabel >Face ID</StyledLabel> 
              <StyledA href='#'><KeyboardArrowRightIcon sx={{fontSize:"2.5rem",fontWeight:"2  00"}} /></StyledA>
            </StyledDiv>    
          </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default Settings
