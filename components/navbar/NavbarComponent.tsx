"use client";

import { Button, Navbar, NavbarLink } from "flowbite-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MenuList } from "./menu";
import { FaCartPlus } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
// import { useAppSelector } from "@/redux/hooks";
//import { selectAvatar, selectBio } from "@/redux/features/userProfile/userProfileSlice";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem as MuiMenuItem,
  Tooltip,
} from "@mui/material";

import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { signOut, useSession } from "next-auth/react";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export function NavbarComponent() {
  // const count = useAppSelector((state) => state.counter.value);
  // const avatar = useAppSelector(selectAvatar);
  // const bio = useAppSelector(selectBio);
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Initialize state with null
  const open = Boolean(anchorEl);
  const { data: session, status } = useSession();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    signOut();
  };
  return (
    <Navbar fluid rounded className="py-4">
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="text-blue-600 text-[30px] mr-4">
          <FaOpencart />
        </span>
        <span className=" self-center whitespace-nowrap text-2xl font-semibold text-blue-500">
          Blue Ecommerce
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <a href="#" className="mt-2 mr-4 text-[22px] text-red-600">
          <FaCartPlus />
        </a>

        <React.Fragment>
          {status === "loading" ? (
            <div>Loading...</div>
          ) : session && session.user ? (
            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      src={session.user.image}
                      alt={session.user.name}
                      style={{ width: "40px", borderRadius: "50%" }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MuiMenuItem
                  onClick={handleClose}
                  className="flex gap-3 items-center justify-center"
                >
                  <img
                    src={session.user.image}
                    alt="User Avatar"
                    style={{ width: "40px", borderRadius: "50%" }}
                  />
                  <div>{session.user.name}</div>
                </MuiMenuItem>
                <Divider />
                <MuiMenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MuiMenuItem>
                <MuiMenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MuiMenuItem>
                <MuiMenuItem onClick={handleSignOut}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MuiMenuItem>
              </Menu>
            </div>
          ) : (
            <Link
              href="/login"
              className="text-lg text-gray-100 py-[2px] px-3
        bg-blue-500 hover:bg-blue-500 rounded-sm"
            >
              Login
            </Link>
          )}
        </React.Fragment>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {MenuList.map((item, index) => (
          <NavbarLink
            key={index}
            as={Link}
            href={item.path}
            active={item.path === pathname}
            style={{
              fontSize: "1.25rem",
              color:
                item.path === pathname
                  ? "#3b82f6"
                  : hoverIndex === index
                  ? "darkblue"
                  : "#4b5563",
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {item.name}
          </NavbarLink>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
