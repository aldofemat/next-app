

import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "@public/assets/icons/gym.png";
import Image from "next/image";

const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <Image
        src={Icon}
        alt="dumbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontFamily="Alegreya"
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {" "}
        {item}{" "}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
