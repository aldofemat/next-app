"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { exerciseOptions, fetchData } from "@utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = ({setExercises, bodyPart, setBodyPart, isBodyParts}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts]= useState([]);
  
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all',...bodyPartsData]);
    }
    fetchExercisesData();
  },[])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises=exercisesData.filter(
        (item)=> item.name.toLowerCase().includes(search)
        ||item.target.toLowerCase().includes(search)
        ||item.equipment.toLowerCase().includes(search)
        ||item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50x"
        textAlign="center"
      >
        Ejercicios Impresionantes <br /> Que Debes Conocer
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Buscar Ejercicios"
          type="text"
        />
        <Button
          variant="contained"
          color="info"
          /* className="search-btn" */
          sx={{
            bgcolor: "#21618C",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </Box>
      <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyParts
        bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts={isBodyParts}/>

      </Box>
    </Stack>
  );
};

export default SearchExercise;
