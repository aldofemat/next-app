/* "use client"; */

import Button from "@mui/material/Button";
import { Box,Typography } from "@mui/material";
import Image from "next/image";
import HeroBannerImage from "@public/assets/images/AldoFematDominada.jpg";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#21618C" fontWeight="600" fontSize="35px">
       Club Fitness <span style={{ color: "#000000", textTransform: "capitalize" }}>
          Web App
        </span>
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Suda, Soríe <br /> y Repite
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
      ¡Echa un vistazo a los ejercicios más efectivos!
      </Typography>
      <Button
        variant="contained"
        color="info"
        href="#exercises"
        sx={{ backgroundColor: "#21618C", padding: "10px" }}
      >
        Explorar Ejercicios
      </Button>
      <Typography
        fontWeight={600}
        color="#21618C"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="60px"
      >
        La persistencia vence a la resistencia, nunca te  rindas!
      </Typography>
      <Image src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
