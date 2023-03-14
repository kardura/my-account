import { CardContent } from '@mui/material';
import React from 'react';
import { StyledCard } from '../StyledBilling';
import Button1Content from '../BillingInformation/BillingTransactions/BillingtransactionCompleted/CompletedTransactions';
import Button2Content from '../BillingInformation/BillingTransactions/BillingTransactionScheduled/ScheduledTransactions';
import { StyledCustomizedButton } from './StyledCustomizedButtons';
import { CustomizedButtonProps } from '../Billing';
import CurrentBillInfo from '../BillingInformation/CurrentBillInfo/CurrentBillInfo';
import BillingHistoryInfo from '../BillingInformation/BillingHistoryInfo/BillingHistoryInfo';


const CustomizedButton=({names}:any)=> {
  const [activeButtonOne,setActiveButtonOne]=React.useState(true)
  const [activeButtonTwo,setActiveButtonTwo]=React.useState(false)
  const [buttonActive,setButtonActive]=React.useState(false)
  

  const handleButtonOneClick=()=>{
    setActiveButtonOne(true);
    setActiveButtonTwo(false);
    
  }

  
  const handleButtonTwoClick=()=>{
    setActiveButtonTwo(true);
    setActiveButtonOne(false);
    
  }
  //   const [activeButton, setActiveButton] = React.useState(1);

  // const handleButtonClick = (buttonNumber: number) => {
  //   setActiveButton(buttonNumber);
  // };
  return (
    <div>
        {/* <StyledCard> */}
                    <StyledCustomizedButton
                        isActive={activeButtonOne  }
                        onClick={handleButtonOneClick}
                    >
                    {names[0]}
                    </StyledCustomizedButton>
                    <StyledCustomizedButton
                        isActive={activeButtonTwo }
                        onClick={ handleButtonTwoClick}
                    >
                     {names[1]} 
                    </StyledCustomizedButton> 
                    <CardContent>
                    {activeButtonOne &&    <CurrentBillInfo />}
                    {activeButtonTwo &&  <BillingHistoryInfo />}
                </CardContent>
                <CardContent>
                  {/* {activeButton === 1 && <Button1Content />}
                  {activeButton === 2 && <Button2Content />} */}
                   
                   {/* {activeButtonCompleted &&  <Button1Content />}
                  {activeButtonScheduled  && <Button2Content />} */}
              </CardContent>
               
               
               
                {/* <CardContent>
                  {activeButton === 1 && <Button1Content />}
                  {activeButton === 2 && <Button2Content />}
                </CardContent> */}
            {/* </StyledCard>      */}
                
    </div>
  )
}

export default CustomizedButton
