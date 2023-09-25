import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {useLoaderData} from 'react-router-dom'
import tasksData from '../data/db.json'
import {EditIcon,ViewIcon} from '@chakra-ui/icons'
import {Container,Heading,Text,Box, SimpleGrid,Card,CardBody,CardHeader,CardFooter,HStack,Divider,Button,Flex} from '@chakra-ui/react'
const Dashboard = () => {
  // const boxStyles={
  //   my:"20px",
  //   padding:"5px",
  //   color:"white",
  //   fontWeight:"bold",
  //   backgroundColor:"purple.400",
  //   cursor:"pointer",
  //   ":hover":{
  //     color:"purple.400",
  //     backgroundColor:"white"
  //   }
  // }

  const [tasks, setTasks] = useState([]);

  useEffect(() => {   
    setTasks(tasksData.tasks);
  }, []);

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

    // Version 2
    // <SimpleGrid minChildWidth="250px" gap="2rem" m="10px">
    //   <Box bg="white" height="200px" border="1px solid" >
    //     <Text color={{base:'purple',md:'green','2xl':'red'}}>
    //       Hello
    //     </Text>
    //   </Box>
    //   <Box bg="white" height="200px" border="1px solid" ></Box>
    //   <Box bg="white" height="200px" border="1px solid" ></Box>
    //   <Box bg="white" height="200px" border="1px solid" ></Box>

    //   <Box bg="white" height="200px" border="1px solid" ></Box>
    //   <Box bg="white" height="200px" border="1px solid" ></Box>
    //   <Box bg="white" height="200px" border="1px solid" ></Box>
    //   <Box bg="white" height="200px" border="1px solid" ></Box>

    //   <Box bg="white" height="200px" border="1px solid" ></Box>
    //   <Box bg="white" height="200px" border="1px solid" ></Box>
    //   <Box bg="white" height="200px" border="1px solid" ></Box>
    //   <Box bg="white" height="200px" border="1px solid" ></Box>
    // </SimpleGrid>

    //Version 3
  
    <SimpleGrid minChildWidth="250px" gap="2rem" m="10px" mt="40px">
      {console.log(tasks)}
      {tasks.length>0 && tasks.map((task)=>(
        
        <Card key={task.id} borderTop="10px" bg="white" borderColor="purple.400">
          
            <CardHeader color="gray.700">
              <Flex gap={5}>
                <Box w="50px" h="50px">
                   <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="sm">{task.title}</Heading>
                  <Text>{task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <Divider/>

            <CardBody>
                <Text>
                  {task.description}
                </Text>
            </CardBody>

            <Divider/>

            <CardFooter>
               <HStack>
                  <Button colorScheme='purple' leftIcon={<ViewIcon/>}>
                    Watch
                  </Button>
                  <Button colorScheme='purple' leftIcon={<EditIcon/>}>
                    Comment
                  </Button>
               </HStack>
            </CardFooter>
        </Card>
      ))}
    </SimpleGrid>



  );
}

export default Dashboard;

