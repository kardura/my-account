import { Avatar, Box, Button, Divider, Grid, StepLabel, styled, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import FeedIcon from '@mui/icons-material/Feed';
import { TopDiv } from './Profile';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



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
    alignItems:"center",
    flexWrap: "wrap",
    marginRight: "20px",
})

const StyledButton=styled(Button)({
  color:"#4791e7",
  fontSize:"12px",
  textDecoration:"none",
})
const StyledDivider=styled(Divider)({
  marginTop:0.4,
  height:1,
  background:"black"

})



const BillingandPreference=()=> {
  return (
<>
    <Box sx={{ width: '100%' }}>
      <TopDiv>
        <Avatar sx={{backgroundColor:"white",border:"1px solid green"}}>
          <FeedIcon sx={{color:"green" }}/>
        </Avatar>
        <h3>Billing Preference</h3>
      </TopDiv>
        <p>Billing Address</p>
      <Grid  container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item sx={{whiteSpace:"pre-line"}} xs={6}>
              <StyledLabel>Address Line1</StyledLabel>
              <Input type="text" />
          </Grid>
          <Grid item sx={{whiteSpace:"pre-line"}} xs={6}>
              <StyledLabel >Address Line2</StyledLabel> 
              <Input type="text" />
          </Grid>
          <Grid item  xs={6}> 
              <StyledLabel >State</StyledLabel> <br />
              <Input type="text" />
          </Grid>
          <Grid  item xs={6}>
              <StyledLabel >ZipCode</StyledLabel> <br />
              <Input type="text" />
          </Grid>
          <Grid item xs={12}>
            <Divider style={{ paddingRight: "12px" }} />
          </Grid>
          <Grid sx={{whiteSpace:"pre-line"}} item xs={6}>
            <StyledDiv>
              <StyledLabel >Auto-Pay</StyledLabel> 
              <StyledButton variant='text' disableRipple>Manage</StyledButton> 
            </StyledDiv>
              <Input type="text" />
          </Grid>
          <Grid sx={{whiteSpace:"pre-line"}} item xs={6}>
            <StyledDiv>
              <StyledLabel >PaperLess Billing</StyledLabel> 
              <StyledButton variant='text' disableRipple>Turn On</StyledButton>
            </StyledDiv>
              <Input type="text" />
          </Grid>
          <Grid sx={{whiteSpace:"pre-line"}} item xs={6}>
            <StyledDiv>
              <StyledLabel sx={{color:"#4791e7" ,fontSize:"1rem"}}>Manage payment method</StyledLabel> 
              <StyledButton disableRipple><KeyboardArrowRightIcon sx={{fontSize:"2.5rem"}}/></StyledButton>
            </StyledDiv>    
          </Grid>
      </Grid>
    </Box>
</>
  )
}

export default BillingandPreference;
