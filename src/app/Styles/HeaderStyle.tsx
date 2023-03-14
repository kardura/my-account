import { Box } from "@mui/material"

import { styled } from '@mui/system'
import { Link } from "react-router-dom"



 export const StyledBox=styled(Box)({
    boxShadow: "0px 7px 26px -16px rgba(0,0,0,0.47)",
    position:"sticky",
    zIndex:1,
    
}) 

export const NavBar=styled('div')({
    background:"#ffffff",
    // height:"60px",
    alignItems:"center",
    padding:"16px 150px 0 150px",
    display:"flex",
    justifyContent:"space-between"
})

export const LeftNavBar=styled('div')({
    display:"flex",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"space-between",
    gap:"60px",
    fontWeight:400,
    textDecoration:"none", 
})

export const NavLinks=styled('div')({
    display:"flex",
    flexGrow:1,
    alignItems:"center",
    gap:"45px",
    fontSize:"1.3rem",

})


export const NavLink=styled(Link)({
    textDecorationLine:"none",
    fontWeight:400,
    color:"black",
    cursor:"pointer",
})


export const Input=styled('input')({
    width:"25%",
    fontSize:"1rem",
    padding:"13px 13px",
    // height:"45px",
   
    border:"1px solid #9d989880", 
    borderRadius:"10px ",
    outline:"none",
    "::placeholder":{color:"#9d989880"},
})
