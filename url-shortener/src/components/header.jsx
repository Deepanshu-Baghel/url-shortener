import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { LogOut } from "lucide-react";
import { LinkIcon } from "lucide-react";


const Header = () => {

    const navigate = useNavigate();
    const user = false ;
  return (
    <nav className="py-4 px-9 flex justify-between items-center" >
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
      <img src="/Quickshort-logo.png" alt="Quickshort-Logo" className="h-20" /> 
    </div>

    <div>
        {!user ? 
        <Button onClick={() => navigate("/auth")} >Login</Button>
        :
        <DropdownMenu>
  <DropdownMenuTrigger asChild className="w-11 h-11 rounded-full cursor-pointer overflow-hidden">
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>

    </DropdownMenuGroup>
    <DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LinkIcon className="mr-2 h-4 w-4 " />My Links
        </DropdownMenuItem>
      <DropdownMenuItem className="text-red-400">
        <LogOut className="mr-2 h-4 w-4 " />
       <span>Logout</span> 
        </DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
        }
    </div>
   </nav>
  );
};

export default Header;


