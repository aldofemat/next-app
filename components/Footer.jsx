'use client'

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
/* import Logo from "@public//assets/icons/AldoFematLogo.svg";
import Image from "next/image";
 */

const Footer = () => (
  <Box mt="80px" backgroundColor="#000000">

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <Stack gap="0px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="10px" pt="24px">
     {/*  <Image src={Logo} alt="logo" color='#000000' style={{ width: '500px', height: '41px' }} /> */}
    </Stack>
    <Typography variant="h5" color="#FFFAFB" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Hecho con ❤️ por Aldo Femat</Typography>
  </Box>
);

export default Footer;