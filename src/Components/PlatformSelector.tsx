import {
  Button,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import usePlatforms from "./hooks/usePlatforms";
import { Platform } from "./hooks/useGames";

interface Props{
  onSelectPlatform: (platform:Platform)=>void;
  selectedPlatform:Platform|null;
}

const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
  const { data, error, isLoading } = usePlatforms();
  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />}>
        {selectedPlatform?.name||'Platforms'}
      </MenuButton>

      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
