import { HStack, Icon, Text, } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdAlarm } from "react-icons/io"
import { AiOutlineClockCircle } from "react-icons/ai"
import { useSetRecoilState } from "recoil";
import { navigationIsOpenAtom } from "../../data/atoms";

interface NavigationItemProps {
  name: string,
  address: string,
  icon: any
}

export const NAVIGATION_ICONS = [IoMdAlarm, AiOutlineClockCircle]


export default function NavigationItem({ name, address, icon }: NavigationItemProps): React.ReactElement {

  const setNavigationIsOpen = useSetRecoilState(navigationIsOpenAtom);

  const { pathname } = useLocation();
  const isActive = pathname === address;

  /* postLinkClick: on mobile devices, you'll want to close the navigation when a link is clicked */
  const postLinkClick = () => {
    setNavigationIsOpen(false);
  };

  return (
    <HStack
      as={Link}
      to={address}
      onClick={postLinkClick}
      spacing={5}
      py={1}
      width="full"
      align="center"
      justify="center"
      color={isActive ? "red" : "gray.800"}
      position="relative"
    >
      <Icon
        as={icon}
        width="20px"
        height="20px"
      />

      <Text
        width="full"
        fontSize="13px"
        fontWeight={isActive ? "semibold" : "normal"}
        textTransform="capitalize"
        color="inherit"
      > {name} </Text>

    </HStack>
  )
}