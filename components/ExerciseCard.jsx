"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";


const ExerciseCard = ({ exercise }) => {

  return (
    <Link className="exercise-card"  href={`/exercise/${exercise.id}`}>


      <Image 
        src={exercise.gifUrl}
        alt={exercise.name}
         width="280"
        height="280" 
        loading="lazy"
      />
      <Stack direction= "row" >
        <Button
             sx={{ml: "21px",
             color: "#fff",
             background: "#020303" ,
             fontSize: "14px",
             borderRadius: "20px",
             textTransform: "capitalize" }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
             sx={{
            ml: "21px",
            color: "#fff",
            background: "#faac07" ,
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize"
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography  ml="21px" color="#000" fontWeight="bold" mt="11px" pb="11px" textTransform= "capitalize" sx={{ fontSize: { lg: '24px', xs: '20px' } }}> {exercise.name} </Typography>
    </Link>
  );
};

export default ExerciseCard;
