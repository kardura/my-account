import Avatar from '@mui/material/Avatar/Avatar'
import React from 'react'
import { OStyledButton } from '../../ButtonsComponent/StyledButtons'
import { StyledCard } from '../../StyledBilling'
import { CBInnerStyledDiv, CBStyledDiv, StyledA,StyledP, StyledSpan } from './CurrentBillInfoStyle'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CardContent from '@mui/material/CardContent'

function CurrentBillInfo() {
  return (
    <CBStyledDiv>
      <div><p>Here is a detailed view of your current Ziply Fiber Bill. Click the <br /> "+ view details" to expand each section and reveal line item charges.</p></div>
      <div><p><b>Account Number</b> 425-267-9832-122322-5 <b> Billing Date</b> Jan 23 2020</p></div>
      <CBInnerStyledDiv>
        <CBInnerStyledDiv>
          <div><p><FeedOutlinedIcon /></p></div>
          <div><h3>Current Bill for 1/24/23-2/23/23</h3></div>
        </CBInnerStyledDiv>
        <div><StyledA>View Bill</StyledA></div>
      </CBInnerStyledDiv>
      <StyledCard>
        <CardContent>
          <CBInnerStyledDiv>
            <div><b>Ziply Monthly Service Charges</b> <StyledA>- hide details</StyledA></div>
            <div><p>$ 0.00</p></div>
          </CBInnerStyledDiv>
          <CBInnerStyledDiv>
            <div><StyledSpan> TOTAL MONTHLY SERVICE CHARGES</StyledSpan></div>
            <div> <StyledSpan>$ 0.00</StyledSpan></div>
          </CBInnerStyledDiv>
          <CBInnerStyledDiv>
            <div>Balance Forward</div>
            <div><StyledP>$73.35</StyledP></div>
          </CBInnerStyledDiv>
          <CBInnerStyledDiv>
            <div>New Charges</div>
            <div><StyledP>$0.00</StyledP></div>
          </CBInnerStyledDiv>
          <CBInnerStyledDiv>
            <div>Total Bill Amount</div>
            <div><StyledP><b>$73.35</b></StyledP></div>
          </CBInnerStyledDiv>
        </CardContent>
      </StyledCard>
      <OStyledButton variant='outlined' color='success'  disableTouchRipple>Compare Bills</OStyledButton>
     
      {/* <div></div> */}
    </CBStyledDiv>
  )
}

export default CurrentBillInfo
