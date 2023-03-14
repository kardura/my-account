

import { styled } from '@mui/system'
import React from 'react'
import Header from './Header'
import HeaderOne from './HeaderOne'

const StyledHeader=styled('div')({
  position:"sticky",
  top:0,
  zIndex:1,
  
})
const StyledDiv=styled('div')({
  margin:"0px 150px",
  height:"6px",
  display:"flex",
  flexDirection:"row"
})
const GreenDiv=styled('div')({
  width:"50%",
  height:"6px",
  background:"green",
  borderRadius:"10px 0px 0px 10px"
})
const BlueDiv=styled('div')({
  width:"30%",
  height:"6px",
  background:"#02caff",

})
const DarkBlueDiv=styled('div')({
  width:"20%",
  height:"6px",
  background:"#000050",
  borderRadius:"0px 10px 10px 0px"
})

 const MainHeader=()=> {
  return (
   
      <StyledHeader>
        <StyledDiv>
          <GreenDiv />
          <BlueDiv />
          <DarkBlueDiv />
        </StyledDiv>
        <HeaderOne/>
        <Header/>
        <span>Account &gt; Billing Preference</span>
      </StyledHeader>
 
  )
}
export default MainHeader