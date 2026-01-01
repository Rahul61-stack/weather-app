"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="relative">
              Units
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <DropdownMenu>
                <DropdownMenuTrigger>Temperature</DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56"
                  align="start"
                  side="right"
                >
                  <DropdownMenuLabel>Available units</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Celsius</DropdownMenuItem>
                    <DropdownMenuItem>Farenheit</DropdownMenuItem>
                    <DropdownMenuItem>Kelvin</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
export default NavBar;
