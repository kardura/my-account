import { Box, Grid,styled, Typography } from '@mui/material'
import React from 'react'
// import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';




const Input=styled('input')({
  padding:"13px 15px",
   width:"70%",
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
    marginRight: "60px",
})

const StyledSpan=styled('span')({
  color:"#036fec",
  fontSize:"12px",
  
})
export const TopDiv=styled('div')({
  display: "flex",
    alignItems: "center",
    gap:"10px"
})



const Profile=()=> {
  return (
    <>
    <Box sx={{ width: '100%' }}>
        <TopDiv>
            <Avatar sx={{backgroundColor:"white",border:"1px solid green"}}>
              <PersonIcon sx={{color:"green" }}/>
            </Avatar> <h3>Profile </h3> 
        </TopDiv><br /><br />
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <StyledLabel>Phone Number</StyledLabel><br /><br />
            <Input type="text" />
          </Grid>
          <Grid item xs={6}>
          <StyledLabel >Email Address</StyledLabel> <br /><br />
            <Input type="email" />
          </Grid>
          <Grid item xs={6}>
          <StyledDiv>
          <StyledLabel >Password</StyledLabel><StyledSpan >Change Password</StyledSpan>
          </StyledDiv><br />
            <Input type="password" />
          </Grid>
      </Grid>
    </Box>



    



     
    </>
  )
} 

export default Profile
