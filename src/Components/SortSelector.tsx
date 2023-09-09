import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Props{
    onSelectSortOrder: (order:string)=>void,
    sortOrder:string
}

const SortSelector = ({onSelectSortOrder,sortOrder}:Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currSortOrder=sortOrders.find(order=>order.value===sortOrder)
  return (

    <Menu>
      <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />}>
        Order by : {currSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
