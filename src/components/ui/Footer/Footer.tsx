import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        width: "100%",
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: "row" },
        justifyContent: { sm: "space-between" },
        marginTop: "auto",
      }}
    >
      <Typography>
        &copy;{new Date().getFullYear()}&laquo;M1&raquo; 18+ <br />
        Данный сайт создан исключительно в обущающих целях. <br />
        Все права принадлежат правообладателям.
      </Typography>
      <Typography>M1</Typography>
    </Stack>
  );
}
