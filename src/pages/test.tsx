import { ArrowBack } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { navigate } from "gatsby";
import { IconButton } from "gatsby-theme-material-ui";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const TextPage = () => {
  return (
    <>
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <IconButton sx={{ color: "black" }} to="/" placeholder={undefined}>
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar>
      <StaticImage
        src="https://www.tsarevo.info/files/images/2011/09/selo-lozenets.jpg"
        alt="asd"
        layout="fullWidth"
        objectFit="cover"
        height={300}
      />
      <Container sx={{ mt: 2 }}>
        <Typography variant="h3" gutterBottom>
          Lozenets
        </Typography>
        <Typography
          variant="body1"
          sx={(theme) => {
            console.log(theme);
            return { color: theme.palette.grey[600] };
          }}
          gutterBottom
        >
          Lozenets is a village located in Southeastern Bulgaria, within the
          Tsarevo municipality, Burgas region. Until 1931, Lozenets was known as
          Embelets (also Emberler or Ambelits), a part of the town Vasiliko
          (today's Tsarevo), named after the cape Ambelits (Lozenets).
        </Typography>
        <Typography variant="h6" gutterBottom>
          Places to Visit
        </Typography>
      </Container>
    </>
  );
};

export default TextPage;
