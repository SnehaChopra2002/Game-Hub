import React from "react";
import { Platform } from "./hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaWindows,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // slug:IconName
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    web: BsGlobe,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((p) => (
          // <Text key={p.id}>{p.name}</Text>
          <Icon as={iconMap[p.slug]} color='gray.500' paddingX={'2px'}/>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
