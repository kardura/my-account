import Divider from '@mui/material/Divider'
import React from 'react'

import { StyledA, StyledSpan } from '../../CurrentBillInfo/CurrentBillInfoStyle'
import { StyledDiv } from './StyledBillingTransactionCompleted'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const BillingTransactionCompleted=()=> {
  return (
    <div>
      <StyledDiv>
        <div><p>Payment <br /> <StyledSpan>January 18</StyledSpan> </p></div>
        <div><p>$60.00 <br /><StyledSpan>Amex ***7890</StyledSpan></p></div>
      </StyledDiv>
      <Divider />
      <StyledDiv>
        <div><p>Payment <br /> <StyledSpan> December 18</StyledSpan></p></div>
        <div><p>$60.00 <br /><StyledSpan>Amex ***7890</StyledSpan></p></div>
      </StyledDiv>
      <Divider />
      <StyledDiv>
        <div><p>Credit <br /> <StyledSpan> December 18</StyledSpan></p></div>
        <div><p>-$15.00 <br /><StyledSpan>Amex ***7890</StyledSpan></p></div>
      </StyledDiv>
      <Divider />
      <StyledDiv>
        <div><p>Payment <br /> <StyledSpan> November 18</StyledSpan></p></div>
        <div><p>$75.00 <br /><StyledSpan>Amex ***7890</StyledSpan></p></div>
      </StyledDiv>
      <Divider /><br />
      <StyledDiv>
            <div>All Transactions</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </StyledDiv>
      
    </div>
  )
}

export default BillingTransactionCompleted
