

import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "@public/assets/icons/gym.png";
import Back from "@public/assets/musculos/back.png";
import Cardio from "@public/assets/musculos/cardio.png";
import Chest from "@public/assets/musculos/chest.png";
import LowerArms from "@public/assets/musculos/lower arms.png";
import LowerLegs from "@public/assets/musculos/lower legs.png";
import Neck from "@public/assets/musculos/neck.png";
import Shoulders from "@public/assets/musculos/shoulders.png";
import UpperArms from "@public/assets/musculos/upper arms.png";
import UpperLegs from "@public/assets/musculos/upper legs.png";
import Waist from "@public/assets/musculos/waist.png";
import Image from "next/image";

const BodyPart = ({ item, setBodyPart, bodyPart}) => {

  const bodyPartImages = {
    all:Icon,
    back:Back,
    cardio:Cardio,
    chest: Chest,
    "lower arms": LowerArms,
    "lower legs": LowerLegs,
    neck: Neck,
    shoulders: Shoulders,
    "upper arms": UpperArms,
    "upper legs": UpperLegs,
    waist: Waist,

  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #21618C" : "",
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
        src={bodyPartImages[item]}
        alt={item}
        style={{ width: "190px", height: "190px" }}
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
