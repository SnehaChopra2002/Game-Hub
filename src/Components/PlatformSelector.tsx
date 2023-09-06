import {
  Button,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Platform } from "./hooks/useGames";
import usePlatforms from "./hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />}>
        Platforms
      </MenuButton>

      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
