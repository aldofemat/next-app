'use client'

import React from 'react';
import Link from "next/link";
import { Stack } from '@mui/material';
import Image from 'next/image';
import Logo from "@public/assets/icons/AldoFematLogo1.png";

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around"  sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none'}} px="20px">

    <Link href='/' className='flex gap-2 flex-center'>

      <Image src={Logo} alt="logo" style={{ width: '100px', height: '100px', margin: '0px 20px' }} />
    
    </Link>

    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >

 <Link href="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #21618C' }}>Inicio</Link>

      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Ejercicios</a>

    </Stack>

  </Stack>
);

export default Navbar;