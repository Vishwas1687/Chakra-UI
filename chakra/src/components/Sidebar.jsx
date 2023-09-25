import React from 'react';
import {List,ListItem,Text,ListIcon} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'
import {CalendarIcon,EditIcon,AtSignIcon} from '@chakra-ui/icons'
const Sidebar = () => {
  return (
    <List spacing={4} fontSize="1.2rem" color="white">
        <ListItem>
            <NavLink to="/">
              <ListIcon as={CalendarIcon}/>
              Dashboard
            </NavLink>
        </ListItem>

        <ListItem>
            <NavLink to="/profile">
              <ListIcon as={EditIcon}/>
              Profile
            </NavLink>
        </ListItem>

        <ListItem>
            <NavLink to="/create">
              <ListIcon as={AtSignIcon}/>
              Create
            </NavLink>
        </ListItem>
    </List>
  );
}

export default Sidebar;
