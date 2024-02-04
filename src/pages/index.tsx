import { Language, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { CardActionArea } from "gatsby-theme-material-ui";
import React from "react";

import SwipeableViews from "react-swipeable-views";

const HeadCard = ({ name, Img, text }) => (
  <Box>
    <Card elevation={0}>
      <CardActionArea placeholder={undefined} to="/test">
        <Box>{Img}</Box>
      </CardActionArea>
    </Card>
    <Box mt={1}>
      <Typography variant="h6" fontWeight={"bolder"} gutterBottom>
        {name}
      </Typography>
      <Typography gutterBottom variant="body2">
        {text}
      </Typography>
    </Box>
  </Box>
);

const IndexPage = () => {
  const a = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <>
      <AppBar
        color={!a ? "transparent" : "default"}
        elevation={a ? undefined : 0}
      >
        <Toolbar>
          <IconButton sx={{ color: !a ? "white" : "black" }} disableRipple>
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ color: !a ? "white" : "black" }}>
            Visit Tsarevo
          </Typography>
          <Box flex={1} />
          <Button
            sx={{ color: !a ? "white" : "black" }}
            endIcon={<Language />}
            disableRipple
          >
            EN
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ position: "relative" }}>
        <StaticImage src="./../test-2-cover.jpg" alt="asd" layout="fullWidth" />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 10,
            display: "flex",
            alignItems: "center",
            paddingLeft: 2,
            paddingRight: 2,
            flexDirection: "row-reverse",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                textShadow: "black 1px 0 20px",
              }}
              variant="h3"
              color="white"
              gutterBottom
            >
              Enjoy the beauty of Tsarevo Municipality
            </Typography>
            <Typography
              paragraph
              variant="body1"
              gutterBottom
              color="white"
              sx={{
                textShadow: "black 1px 0 20px",
              }}
            >
              Tsarevo has incredible places for you all around the municipality.
              Our fantastic destinations are ready for your visit.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container sx={{ mt: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={"bolder"}
          textAlign={"center"}
          sx={{ mt: 4 }}
        >
          Amazing places to visit
        </Typography>
        <Typography paragraph textAlign={"center"} variant="body2">
          Tsarevo has incredible places for you all around the municipality. Our
          fantastic destinations are ready for your visit.
        </Typography>
        <iframe
          width="100%"
          height="180"
          src="https://www.youtube.com/embed/7ogG3oFzDUE?si=2kADtWTMIMzJVmNs&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={"bolder"}
          sx={{ mt: 2 }}
        >
          Destinations
        </Typography>
        <Grid2 container spacing={1}>
          <Grid2 xs={6} md={2}>
            <HeadCard
              name="Sinemorets"
              text="A timeless jewel on the coast"
              Img={
                <StaticImage
                  src="./../veleka-sinemorec-3.jpg"
                  alt="asd"
                  layout="fullWidth"
                />
              }
            />
          </Grid2>
          <Grid2 xs={6} md={2}>
            <HeadCard
              name="Tsarevo"
              text="Coastal charm meets timeless tranquility"
              Img={
                <StaticImage
                  src="./../carevo-drone-1.jpg"
                  alt="asd"
                  layout="fullWidth"
                />
              }
            />
          </Grid2>
          <Grid2 xs={6} md={2}>
            <HeadCard
              name="Lozenets"
              text="Pristine beach, vibrant nightlife by dusk"
              Img={
                <StaticImage
                  src="./../lozenec-long.jpg"
                  alt="asd"
                  layout="fullWidth"
                />
              }
            />
          </Grid2>
          <Grid2 xs={6} md={2}>
            <HeadCard
              name="Ahtopol"
              text="Where golden sunsets meet crystal waters"
              Img={
                <StaticImage
                  src="./../ahtopol-boat.jpg"
                  alt="asd"
                  layout="fullWidth"
                />
              }
            />
          </Grid2>
          <Grid2 xs={6} md={2}>
            <HeadCard
              name="Varvara"
              text="Where golden sunsets meet crystal waters"
              Img={
                <StaticImage
                  src="./../varvara-test.jpg"
                  alt="asd"
                  layout="fullWidth"
                />
              }
            />
          </Grid2>
          <Grid2 xs={6} md={2}>
            <HeadCard
              name="Rezovo"
              text="Where golden sunsets meet crystal waters"
              Img={
                <StaticImage src="./rezovo.jpg" alt="asd" layout="fullWidth" />
              }
            />
          </Grid2>
        </Grid2>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 5 }}>
          <Button variant="outlined">All destiantions</Button>
        </Box>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={"bolder"}
          sx={{ mt: 2 }}
        >
          Our pristine beaches
        </Typography>
        <Grid2 container spacing={3}>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Lozenets Central"
              text="Clear waters, golden sands, and lively vibe on the Black Sea coast"
              Img={
                <StaticImage
                  src="https://www.tsarevo.info/files/images/2012/06/golemiyat-plazh-v-lozenets-01.jpg"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Coral"
              text="Experience the hippy essence of Coral Beach, where camping meets the rhythm of free spirits"
              Img={
                <StaticImage
                  src="https://lozenets-blacksea.com/e2/images/lzbs_content/_980/koral_7474358750_eaeb4cb897_o.jpg"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Oasis"
              text="Combines luxury with affordability along the picturesque Black Sea coast"
              Img={
                <StaticImage
                  src="https://oasis-bg.com/wp-content/uploads/2017/08/%D0%95%D0%95%D0%95%D0%95%D0%95%D0%95%D0%95%D0%A0%D0%A0%D0%92%D0%92.jpg"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Arapya"
              text="Discover the hidden gem of the Black Sea, Arapya Beach, where pristine sands meet crystal-clear waters"
              Img={
                <StaticImage
                  src="https://hotelmap.bg/uploads/images/gallery/ab1d2f8e309f4a9185dcf6990c1baaf6arapia_beach-2.jpg"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Nestinarka"
              text="Discover Nestinarka, where crystal-clear waters meet golden sands for an unforgettable escape"
              Img={
                <StaticImage
                  src="https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/255137749_4503747846355907_554806553301039294_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=yuVtwnjEjSkAX81wEP8&_nc_ht=scontent.fsof8-1.fna&oh=00_AfDBM0Y86TZq1sAl9afWTSolEKLwZn2QLilpdJqJMvOx7g&oe=65C4028E"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="River mouth Veleka"
              text="Experience the serene beauty where the Velika River meets the pristine sands of Ahtopol Beach"
              Img={
                <StaticImage
                  src="http://photoplace.bg/img/pictures/2020/5/16/17/43/53/779834_1920.jpg"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
        </Grid2>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 5 }}>
          <Button variant="outlined">All beaches</Button>
        </Box>
      </Container>
    </>
  );
};

export default IndexPage;
