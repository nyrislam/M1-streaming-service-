import { Box, CircularProgress } from "@mui/material";

export default function LoadingMessage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
}
