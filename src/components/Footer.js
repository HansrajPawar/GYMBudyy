import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/logo-icon.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="10px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "41px", height: "41px" }} />
      <h3>GYMBuddy</h3>
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="31px"
      textAlign="center"
      pb="40px"
    >
      Made by Hansraj Pawar
    </Typography>
  </Box>
);

export default Footer;
