import React from "react";
import { CardContent, CardMedia, Card } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import './index.css'

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(128, 128, 128,0.1)",
  color: "white",
  padding: "2rem",
  borderRadius: 8,
  width: "fit-content",
}));

function AppCard({ styles, image, name, description }) {
  return (
    <CustomCard sx={styles}>
      <div className="card-container">
        <CardMedia
          component="img"
          sx={{ height: "10rem",objectFit:'contain' }}
          image={image}
        />
        <CardContent
          sx={{
            padding: 0,
            ":last-child": { padding: 0 },
            display: "flex",
            flexDirection: "column",
            gap: "0.1rem",
          }}
        >
          <div className="name flex">
            <span>Name:</span>
            <h3>{name}</h3>
          </div>
          <div className="description flex">
            <span>Description: </span>
            <h3>{description}</h3>
          </div>
        </CardContent>
      </div>
    </CustomCard>
  );
}

export default AppCard;
