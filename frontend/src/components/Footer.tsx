import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#9575CD",
        color: "#fff",
        textAlign: "center",
        p: 2,
        fontFamily: "Poppins",
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontFamily: "Poppins", fontSize: "1rem" }}
      >
        © {currentYear} Olivia's Tic Tac Toe. Created by{" "}
        Olivia{" "}
        with ❤️
      </Typography>
    </Box>
  );
};

export default Footer;
