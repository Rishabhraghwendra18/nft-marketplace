import React from 'react';
import { Button } from '@mui/material';
import { alpha, styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
    fontFamily:'Poppins',
    fontWeight:500,
    fontSize:'20px',
    backgroundColor:'#BFC200',
    color:'white',
    borderRadius:10
 }));

function AppButton({children,style,onClick=()=>{}}) {
  return (
    <CustomButton sx={style} onClick={onClick}>{children}</CustomButton>
  )
}

export default AppButton