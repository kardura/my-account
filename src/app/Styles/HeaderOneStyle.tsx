import { styled } from "@mui/material"
import { Link } from "react-router-dom"

export const TopBar=styled('div')({
    background:"#ffffff",
    padding:"10px  150px",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-between"
})


export const LeftTopBar=styled('div')({
    display:"flex",
    alignItems:"center",
   
    gap:"10px",
    fontWeight:600,
    textDecoration:"none", 
})

export const RightTopBar=styled('div')({
    display:"flex",
    alignItems:"center",
    gap:"30px",
    fontWeight:600,
   
})

export const RightTopBarOne=styled('div')({
    display:"flex",
    alignItems:"center",
    color:"green",
    fontWeight:600,
    cursor:"pointer"

})
export const ServicesLink=styled(Link)({
    textDecorationLine:"none",
    fontWeight:600,
    color:"black",
    cursor:"pointer"

})
export const AccountLink=styled(Link)({
    textDecorationLine:"none",
    fontWeight:600,
    color:"green",
    cursor:"pointer"
})