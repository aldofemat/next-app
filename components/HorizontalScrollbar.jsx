'use client'

import React, { useContext } from 'react'
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import Image from "next/image";

import ExerciseCard from "../components/ExerciseCard";
import BodyPart from "../components/BodyPart";
import RightArrowIcon from "@public/assets/icons/right-arrow.png";
import LeftArrowIcon from "@public/assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <Image src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <Image src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrolbar =({data, bodyPart, setBodyPart, BodyParts})=> (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item)=>(
       <Box
       key={item.id|| item}
       itemID={item.id|| item}
       title={item.id|| item}
       m="0 40px"
       >
       {bodyPart ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
      ))}
    </ScrollMenu>
  );

export default HorizontalScrolbar