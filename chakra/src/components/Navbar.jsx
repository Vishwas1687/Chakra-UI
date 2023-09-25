import React from 'react';
import {Flex,Box,Text,HStack,Heading,Button,Spacer} from '@chakra-ui/react';
const Navbar = () => {
  return (
    <Flex as="nav" m="1rem" justify="space-between" alignItems="center">
        <Box>
            <Heading as="h1">
                Nav title
            </Heading>
        </Box>

        <Spacer/>
        <HStack spacing="20px">
            <Box bg="gray.200" p="10px" borderRadius={50}>
               M
            </Box>
            <Text>
                Avatar Text
            </Text>
            <Button colorScheme="purple">
                Logout
            </Button>
        </HStack>
    </Flex>
  );
}

export default Navbar;
