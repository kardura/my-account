import { Box, Button, Card } from "@mui/material";

import { styled } from '@mui/system'

export const StyledBox=styled(Box)({
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    // width:"100%"
})

export const StyledCard=styled(Card)({
    padding:"20px",
    // width:"100%"
})

export const StyledDiv=styled('div')({
    padding:"150px 150px",
    display:"flex",
    justifyContent:"space-around"
})


export const StyledInnerDiv=styled('div')({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"20px"
})

export const StyledIconDiv=styled('div')({
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:"20px"
})


export const StyledButton=styled(Button)(({theme})=>({
    padding:"10px 40px",
    // border:"2px solid",
    borderRadius:"25px",
    marginY:"1rem",
    // width:"50%"

}))

export const StyledManageButton=styled(Button)({
    "&.MuiButton-root":{
        padding:"10px 50px",
        borderRadius:"25px"
    }
})

export const SkeltonDiv=styled('div')({
    marginTop:"50px ",
    display:"flex",
    flexDirection:"column",
    gap:"50px",
    justifyContent:"space-between",
    alignItems:"center"
})
