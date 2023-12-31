import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../public/assets/icons/body-part.png";
import TargetImage from "../public/assets/icons/target.png";
import EquipmentImage from "../public/assets/icons/equipment.png";
import Image from "next/image";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name} </Typography>
        <Typography variant="h6">
        Ejercitarte regularmente te mantiene fuerte.{" "}
          <span style={{ textTransform: "capitalize" }}> y el ejercicio {name}</span>  es uno de los mejores ejercicios para trabajar tus {target}. <br /> Entrenar de 3 a 4 días por semana te ayudará
          a mejorar tu  estado de ánimo y ganar energía.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#21618C",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <Image
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5"
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
