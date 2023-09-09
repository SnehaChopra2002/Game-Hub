import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const SortSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<RiArrowDropDownLine/>}>
            Order by : Relavance
        </MenuButton>
        <MenuList>
            <MenuItem>Rating</MenuItem>
            <MenuItem>Recent</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>XYZ</MenuItem>
            <MenuItem>ABC</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortSelector