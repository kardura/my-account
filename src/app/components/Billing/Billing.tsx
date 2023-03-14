import { Avatar, Box, Button, Card, CardContent, Skeleton, Stack, styled, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import {StyledDiv,StyledInnerDiv,StyledButton, SkeltonDiv, StyledCard, StyledBox, StyledIconDiv} from './StyledBilling';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import Container from '@mui/material';
import BillingTransactionCompleted from './BillingInformation/BillingTransactions/BillingtransactionCompleted/BillingTransactionCompleted';
import { StyledCustomizedButton } from './ButtonsComponent/StyledCustomizedButtons';
import Button1Content from './BillingInformation/BillingTransactions/BillingtransactionCompleted/CompletedTransactions';
import Button2Content from './BillingInformation/BillingTransactions/BillingTransactionScheduled/ScheduledTransactions';
import CustomizedButton from './ButtonsComponent/CustomizedButton';
import CurrentBillInfo from './BillingInformation/CurrentBillInfo/CurrentBillInfo';
import BillingHistoryInfo from './BillingInformation/BillingHistoryInfo/BillingHistoryInfo';
// import { OStyledButton } from './ButtonsComponent/StyledButtons';



export interface CustomizedButtonProps {
  isActive: boolean;
  onClick: () => void;
  
}


const Billing=()=> {
  const [activeButtonOne,setActiveButtonOne]=React.useState(false)
  const [activeButtonTwo,setActiveButtonTwo]=React.useState(false)
  const [activeButtonCompleted,setActiveButtonCompleted]=React.useState(false)
  const [activeButtonScheduled,setActiveButtonScheduled]=React.useState(false)
  // const [activeButton, setActiveButton] = React.useState(1);

  
  return (
  
   <StyledDiv> 
        <div>
            <StyledIconDiv>
              <div>
                <Avatar sx={{backgroundColor:"white",border:"2px solid green"}} ><RequestQuoteIcon sx={{color:"green"}}/> </Avatar>
              </div>
              <div>
              <h3>Total Balance</h3>
              </div>
            </StyledIconDiv>
          <StyledCard>
            <CardContent>
              <StyledInnerDiv>
                <div>
                  <span>Ziply Fiber Green Plan</span>
                  <h1>$60.00</h1>
                  <span>Payment due Mar 28</span>
                </div>
                <div>
                  <StyledButton color="secondary" variant="contained" >
                    Make a Payment
                  </StyledButton>
                </div>
              </StyledInnerDiv>
              <p>Manage Autopay/Paperless Billing</p>
              <div>
                <Button  variant='outlined'>AutoPay</Button>
                <Button variant='outlined'>Paperless Billing</Button>
              </div>
              <SkeltonDiv>
                  <div>You haven't signed up for Autopay</div>
                  <Button variant='outlined' color='success'>Sign Up for Autopay</Button>
                  <div>
                    <Stack spacing={0.2}>
                      <Skeleton variant="text" sx={{borderRadius:"15px 15px 0px 0px", width:"125px", fontSize: '1rem' }} />
                      <Skeleton variant="rectangular" width={125} height={10} />
                    </Stack>  
                  </div>
              </SkeltonDiv>
            </CardContent>
          </StyledCard>
        </div>


      {/* <StyledBox> */}
      <div>
        <div>
          <StyledIconDiv>
              <div>
                <Avatar sx={{backgroundColor:"white",border:"2px solid green"}} ><AttachMoneyIcon sx={{color:"green"}}/> </Avatar>
              </div>
              <div>
              <h3>Billing Information</h3>
              </div>
            </StyledIconDiv>
            <StyledCard>
                <CustomizedButton  names={["Current Bill","Billing History"]}/>
               <CardContent>
                  {activeButtonOne  && <CurrentBillInfo />}
                  {activeButtonTwo  && <BillingHistoryInfo />}
                </CardContent>
            </StyledCard>
              
              
              
               {/* <CurrentBillInfo /> */}
            {/* <StyledCard>

                <Button variant='outlined'>
                  Current Bill
                </Button>
                <Button variant='outlined'>Billing History</Button>
            // {/* </StyledCard> */} 
            {/* </StyledBox>
              <StyledBox> */}
        </div>
        <div>
            <StyledIconDiv>
              <div>
                <Avatar sx={{backgroundColor:"white",border:"2px solid green"}} ><SyncAltIcon sx={{color:"green"}}/> </Avatar>
              </div>
              <div>
              <h3>Transactions</h3>
              </div>
            </StyledIconDiv>

                {/* <CustomizedButton  names={["Current Bill","Billing History"]}/> */}
            <StyledCard>
              <CustomizedButton  names={["completed","Scheduled"]}  />
             
            </StyledCard>
        </div>
        {/* </StyledBox> */}
      </div>
     </StyledDiv> 
    // </Container>
    
  )
}

export default Billing
