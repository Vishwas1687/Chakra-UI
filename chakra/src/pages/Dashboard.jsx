import React from 'react';
import {Container,Heading,Text,Box, SimpleGrid} from '@chakra-ui/react'
const Dashboard = () => {
  const boxStyles={
    my:"20px",
    padding:"5px",
    color:"white",
    fontWeight:"bold",
    backgroundColor:"purple.400",
    cursor:"pointer",
    ":hover":{
      color:"purple.400",
      backgroundColor:"white"
    }
  }
  return (
    // Version 1
    // <Container py="20px">
    //     <Heading>
    //        Dashboard
    //     </Heading>
    //     <Text marginTop="20px">This is a Chakra Text component</Text>
    //     <Box my="5px" p="5px" bg="purple.400">
    //       <Text color="white">
    //         This is a Chakra Box component
    //       </Text>
    //     </Box>

    //     <Box sx={boxStyles}> This is box styles object</Box>
    // </Container>

    //Version 2
    <SimpleGrid minChildWidth="250px" gap="2rem" m="10px">
      <Box bg="white" height="200px" border="1px solid" >
        <Text color={{base:'purple',md:'green','2xl':'red'}}>
          Hello
        </Text>
      </Box>
      <Box bg="white" height="200px" border="1px solid" ></Box>
      <Box bg="white" height="200px" border="1px solid" ></Box>
      <Box bg="white" height="200px" border="1px solid" ></Box>

      <Box bg="white" height="200px" border="1px solid" ></Box>
      <Box bg="white" height="200px" border="1px solid" ></Box>
      <Box bg="white" height="200px" border="1px solid" ></Box>
      <Box bg="white" height="200px" border="1px solid" ></Box>

      <Box bg="white" height="200px" border="1px solid" ></Box>
      <Box bg="white" height="200px" border="1px solid" ></Box>
      <Box bg="white" height="200px" border="1px solid" ></Box>
      <Box bg="white" height="200px" border="1px solid" ></Box>
    </SimpleGrid>
  );
}

export default Dashboard;
