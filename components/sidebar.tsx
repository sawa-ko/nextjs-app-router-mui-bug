"use client";

import { useState } from "react";

import AllInboxIcon from "@mui/icons-material/AllInbox";
import HomeIcon from "@mui/icons-material/Home";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { ListItemButtonSidebar } from "./theme";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Paper>
      <Stack
        direction={"column"}
        height={"100%"}
        justifyContent={"space-between"}
        spacing={2}
        width={open ? 300 : "auto"}
      >
        <Stack pt={2} px={2} spacing={0.5}>
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{ width: "fit-content" }}
          >
            <MenuIcon />
          </IconButton>
          <List>
            <ListItemButtonSidebar>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Inicio"} />
            </ListItemButtonSidebar>
          </List>
        </Stack>
        <Box height={"100%"} px={2}>
          <List
            subheader={
              <Typography mb={1} variant={"body1"}>
                Gestión
              </Typography>
            }
          >
            <ListItemButtonSidebar>
              <ListItemIcon>
                <AllInboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Paquetes"} />
            </ListItemButtonSidebar>
            <ListItemButtonSidebar>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary={"Entregas"} />
            </ListItemButtonSidebar>
            <ListItemButtonSidebar>
              <ListItemIcon>
                <LibraryAddCheckIcon />
              </ListItemIcon>
              <ListItemText primary={"Manifiestos"} />
            </ListItemButtonSidebar>
          </List>
        </Box>
        <Paper elevation={2} sx={{ borderRadius: "shape.borderRadius" }}>
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            padding={2}
            spacing={1}
            width={"100%"}
          >
            <Stack>
              <Typography>User</Typography>
              <Typography maxWidth={200} noWrap={true}>
                user@sercargologistics.com
              </Typography>
            </Stack>
            <IconButton color="error">
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
}
