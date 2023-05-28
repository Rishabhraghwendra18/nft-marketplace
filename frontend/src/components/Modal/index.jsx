import React,{useState} from "react";
import {
  Modal,
  Box,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { NFTStorage, File } from 'nft.storage';
import { useSnapshot } from "valtio";
import state from "../../store";
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
const nftstorage = new NFTStorage({ token: import.meta.env.VITE_NFT_STORAGE_API_KEY })
const CustomModal = styled(Modal)(({ theme }) => ({
}));

function AppModal({ open, handleClose }) {
  const snap = useSnapshot(state);
const [isUploadingToIPFS, setIsUploadingToIPFS] = useState(false);
  
const handleFormSubmit = async (event)=>{
    event.preventDefault();
    setIsUploadingToIPFS(true);
    state.isUploadingToIPFS=true;
    console.log("form submit");
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const description = formData.get('description');
    const file = formData.get('file');
    
    try {
      const response = await nftstorage.store({
        image:file,
        name,
        description,
      });
      console.log("uploaded: ",response);
      setIsUploadingToIPFS(false);
      state.isUploadingToIPFS=false;
    } catch (error) {
      console.log("error while uploading: ",error);
      setIsUploadingToIPFS(false);
      state.isUploadingToIPFS=false;
    }
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
            <AppButton type={"submit"} loading={isUploadingToIPFS}>Mint</AppButton>
          </form>
        </div>
      </Box>
    </CustomModal>
  );
}

export default AppModal;
