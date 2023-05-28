import React from 'react';
import { Button } from '@mui/material';
import { alpha, styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
    fontFamily:'Poppins',
    fontWeight:500,
    fontSize:'20px',
    backgroundColor:'transparent',
    border:'2px solid #BFC200',
    color:'#BFC200',
    borderRadius:10
 }));

function AppButton({children,style,onClick=()=>{},type}) {
  return (
    <CustomButton sx={style} onClick={onClick} type={type}>{children}</CustomButton>
  )
}

export default AppButton