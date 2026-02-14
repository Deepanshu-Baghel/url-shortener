import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";


const Header = () => {

    const navigate = useNavigate();
    const user = true ;
  return (
    <nav className="py-4 px-9 flex justify-between items-center" >
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
      <img src="/Quickshort-logo.png" alt="Quickshort-Logo" className="h-18 " />
      <span className="text-xl font-bold">URL Shortener</span>
    </div>

    <div>
        {!user ? 
        <Button onClick={() => navigate("/auth")} >Login</Button>
        :
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
        }
    </div>
   </nav>
  );
};

export default Header;
