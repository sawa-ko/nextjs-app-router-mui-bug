import ChangeTheme from "../components/change-theme";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Stack,
} from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={5}>
      <ChangeTheme />
      <FormControl variant="outlined">
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Test</FormHelperText>
      </FormControl>
    </Stack>
  );
}
