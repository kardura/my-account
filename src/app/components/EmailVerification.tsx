
import { styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'


const StyledBox=styled(Box)({
    
    padding:" 5px 13px",
    background:"#98d3fd91",
    borderRadius:"10px",
    margin:"50px 15px",
    fontSize:"1em"

})

const VerifyLink=styled(Link)({
    textDecoration:"none",
    color:"#0089fd"
})

 const EmailVerification=()=> {
  return (
    <StyledBox>
        <p>Hi Victoria,welcome to Ziply Fiber! You have not verified your email ziplygignow03@gmail.com. <VerifyLink to={'/'}>Resend Verification email.</VerifyLink> You have not verified your Mobile Number 1112223333. <br /> <VerifyLink to={'/'}>Verify now</VerifyLink></p>
    </StyledBox>
  )
}
export default EmailVerification