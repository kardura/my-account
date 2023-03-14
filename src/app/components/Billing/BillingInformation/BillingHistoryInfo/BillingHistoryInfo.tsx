import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Divider } from '@mui/material';
import { CBStyledDiv, StyledA } from '../CurrentBillInfo/CurrentBillInfoStyle';
import { CHInnerStyledDiv } from './BillingHistoryInfoStyles';



const BillingHistoryInfo =()=> {
  return (
  <>
        <p><b> Account Number</b> 425-267-9832-122322-5</p>
    <CBStyledDiv>
        <CHInnerStyledDiv>
            <div>February 2023</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </CHInnerStyledDiv>     
        <Divider />
        <CHInnerStyledDiv>
            <div>January 2023</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </CHInnerStyledDiv>     
        <Divider />
        <CHInnerStyledDiv>
            <div>December 2022</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </CHInnerStyledDiv>     
        <Divider />
        <CHInnerStyledDiv>
            <div>November 2022</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </CHInnerStyledDiv>     
        <Divider />
        <CHInnerStyledDiv>
            <div>October 2022</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </CHInnerStyledDiv>     
        <Divider />
        <CHInnerStyledDiv>
            <div>September 2022</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </CHInnerStyledDiv>     
        <Divider />
        <StyledA>Show All Bills</StyledA>
    </CBStyledDiv>
  </>
  )
}

export default BillingHistoryInfo
