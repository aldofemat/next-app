"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "@components/Exercises";
import HeroBanner from "@components/HeroBanner";
import SearchExercise from "@components/SearchExercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};
export default Home;
