import React from 'react';
import {Outlet} from 'react-router-dom'
import {Grid,GridItem} from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
const RootLayout = () => {
  return (
    <Grid templateColumns="repeat(6,1fr)">
      <GridItem as="aside" 
       colSpan={{base:6,md:2,lg:1}}
       bg="purple.400"
       p={{base:'20px',md:'30px'}}
       minHeight={{md:"100vh"}}>
        <Sidebar/>
      </GridItem>
      <GridItem as="main"
      colSpan={{base:6,md:4,lg:5}} p="40px">
      <Navbar/>
      <Outlet/>
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
