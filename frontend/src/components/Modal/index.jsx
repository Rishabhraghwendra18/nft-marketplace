import React from "react";
import {
  Modal,
  Box,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import FormItem from "../FormItem";
import AppButton from "../Button";
import "./index.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundColor: "rgba(13, 13, 13, 1)",
  color:'white',
  borderRadius:'10px'
};

const CustomModal = styled(Modal)(({ theme }) => ({
}));

function AppModal({ open, handleClose }) {
  const handleFormSubmit = async (event)=>{
    event.preventDefault();
    console.log("form submit")
  }
  return (
    <CustomModal
      open={open}
      onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className="modal-modal-title">Mint Your First NFT</h1>
        <div>
          <form className="formItems" onSubmit={handleFormSubmit}>
            <FormItem label={"Name"} inputType={"text"} inputId={"name"} />
            <FormItem label={"Description"} inputType={"text"} inputId={"description"}>
              <textarea name="description" id="description" rows="4" cols="50"></textarea>
            </FormItem>
            <FormItem label={"Choosle File"} inputType={"file"} inputId={"file"} accept={"image/*"}/>
            <AppButton type={"submit"}>Mint</AppButton>
          </form>
        </div>
      </Box>
    </CustomModal>
  );
}

export default AppModal;
