import { Avatar, Box, Grid, styled } from '@mui/material'
import React from 'react'
import { TopDiv } from './Profile'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RoomServiceIcon from '@mui/icons-material/RoomService';


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
  fontSize:"13px",
  color:"#1b1b1b",
  gap:"200px",
})

const StyledDiv=styled('div')({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems:"center",
    marginRight: "20px",
    // fontWeight:"600",
})

const StyledA=styled('a')({
  color:"#4791e7",
  fontSize:"12px",
  textDecoration:"none",
})

const PlanandServices=()=> {
  return (
    <>
      <Box sx={{ width: '100%' }}>
      <TopDiv>
        <Avatar sx={{backgroundColor:"white",border:"1px solid green"}}>
          <RoomServiceIcon sx={{color:"green" }}/>
          
        </Avatar>
        <h3>Plans & Services</h3>
      </TopDiv><br />
       
      <Grid  container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid sx={{whiteSpace:"pre-line"}} item xs={6}>
            <StyledDiv>
              <StyledLabel >Ziply Fiber Green PLan</StyledLabel> 
              <StyledA href='#'>Plan Details</StyledA> 
            </StyledDiv>
              <Input type="text" />
          </Grid>
          <Grid sx={{whiteSpace:"pre-line"}} item xs={6}>
            <StyledDiv>
              <StyledLabel >Account Number</StyledLabel> 
              <StyledA href='#'>Show</StyledA>
            </StyledDiv>
              <Input type="text" />
          </Grid>
          <Grid sx={{whiteSpace:"pre-line"}} item xs={6}>
            <StyledDiv>
              <StyledLabel sx={{color:"#4791e7"}}>Link Another Account</StyledLabel> 
              <StyledA href='#'><KeyboardArrowRightIcon sx={{fontSize:"2.5rem"}} /></StyledA>
            </StyledDiv>    
          </Grid>
      </Grid>
      </Box>
    </>

  )
}

export default PlanandServices
