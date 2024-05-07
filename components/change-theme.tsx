"use client";

import { useColorScheme } from "@mui/material/styles";

import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function ChangeTheme() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      >
        Change theme | {mode}
      </Button>
    </>
  );
}
