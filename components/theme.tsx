"use client";
import { Roboto } from "next/font/google";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

import { ListItemButton, styled } from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = extendTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export const ListItemButtonSidebar = styled(ListItemButton)(
  ({ selected, theme }) => ({
    "& .MuiListItemIcon-root": {
      color: selected ? theme.palette.primary.main : "inherit",
      minWidth: 40,
    },
    ":hover": {
      "& .MuiListItemIcon-root": {
        color: theme.palette.primary.main,
      },
      backgroundColor: `${theme.palette.primary.main}40`,
      color: theme.palette.primary.main,
    },
    backgroundColor: selected
      ? `${theme.palette.primary.main}40`
      : "transparent",
    borderRadius: theme.shape.borderRadius,
    color: selected ? theme.palette.primary.main : "inherit",
  }),
);

export default theme;
