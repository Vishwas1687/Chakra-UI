import React from 'react';
import {Container,Heading,Text,Box} from '@chakra-ui/react'
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
    <Container py="20px">
        <Heading>
           Dashboard
        </Heading>
        <Text marginTop="20px">This is a Chakra Text component</Text>
        <Box my="5px" p="5px" bg="purple.400">
          <Text color="white">
            This is a Chakra Box component
          </Text>
        </Box>

        <Box sx={boxStyles}> This is box styles object</Box>
    </Container>
  );
}

export default Dashboard;
