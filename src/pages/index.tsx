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
      {/* <Toolbar></Toolbar> */}
      <Box sx={{ position: "relative" }}>
        <StaticImage
          src="./../test-2-cover.jpg"
          alt="asd"
          layout="fullWidth"
          transformOptions={{
            duotone: {
              shadow: "#222222",
              highlight: "#222222",
              opacity: 20,
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 10,
            // height: "100%",
            // width: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: 2,
            paddingRight: 2,
            flexDirection: "row-reverse",
            justifyContent: "center",
          }}
        >
          {/* <StaticImage
          src="http://tsarevo.org/components/com_k2/images/placeholder/category.png"
          alt=""
          layout="fixed"
          width={50}
        /> */}
          <Box>
            <Typography
              sx={{
                textShadow: "black 1px 0 20px",
              }}
              variant="h3"
              color="white"
              gutterBottom
              // textAlign={"center"}
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
        {/* <Typography variant="h6" gutterBottom>
        Visit Tsarevo
      </Typography> */}
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
                  transformOptions={{
                    duotone: {
                      shadow: "#222222",
                      highlight: "#222222",
                      opacity: 20,
                    },
                  }}
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
                  transformOptions={{
                    duotone: {
                      shadow: "#222222",
                      highlight: "#222222",
                      opacity: 20,
                    },
                  }}
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
                  transformOptions={{
                    duotone: {
                      shadow: "#222222",
                      highlight: "#222222",
                      opacity: 20,
                    },
                  }}
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
                  transformOptions={{
                    duotone: {
                      shadow: "#222222",
                      highlight: "#222222",
                      opacity: 20,
                    },
                  }}
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
                  transformOptions={{
                    duotone: {
                      shadow: "#222222",
                      highlight: "#222222",
                      opacity: 20,
                    },
                  }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={6} md={2}>
            <HeadCard
              name="Rezovo"
              text="Where golden sunsets meet crystal waters"
              Img={
                <StaticImage
                  src="./rezovo.jpg"
                  alt="asd"
                  layout="fullWidth"
                  transformOptions={{
                    duotone: {
                      shadow: "#222222",
                      highlight: "#222222",
                      opacity: 20,
                    },
                  }}
                />
              }
            />
          </Grid2>
        </Grid2>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 5 }}>
          <Button variant="outlined">All destiantions</Button>
        </Box>
        {/* <HeadCard
          name="Lozenets"
          Img={
            <StaticImage
              src="https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/316115000_501521048678043_675780825677286875_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=783fdb&_nc_ohc=0QJWnlMFYucAX_3ujVM&_nc_ht=scontent.fsof9-1.fna&oh=00_AfDd4iTo9gYGKYMflSrZY9xF7o_9eoiiXXAVa_Nsy3Tang&oe=65BF2B15"
              alt="asd"
              layout="fullWidth"
              transformOptions={{
                duotone: {
                  shadow: "#222222",
                  highlight: "#222222",
                  opacity: 20,
                },
              }}
            />
          }
        />
        <HeadCard
          name="Tsarevo"
          Img={
            <StaticImage
              src="https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/316115000_501521048678043_675780825677286875_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=783fdb&_nc_ohc=0QJWnlMFYucAX_3ujVM&_nc_ht=scontent.fsof9-1.fna&oh=00_AfDd4iTo9gYGKYMflSrZY9xF7o_9eoiiXXAVa_Nsy3Tang&oe=65BF2B15"
              alt="asd"
              layout="fullWidth"
              transformOptions={{
                duotone: {
                  shadow: "#222222",
                  highlight: "#222222",
                  opacity: 20,
                },
              }}
            />
          }
        />
        <HeadCard
          name="Varvara"
          Img={
            <StaticImage
              src="https://classbg.eu/attachments/7/7/7706c5865a4204ecbe7624107153e8d2.jpg"
              alt="asd"
              layout="fullWidth"
              transformOptions={{
                duotone: {
                  shadow: "#222222",
                  highlight: "#222222",
                  opacity: 20,
                },
              }}
            />
          }
        />

        <HeadCard
          name="Ahtopol"
          Img={
            <StaticImage
              src="https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/337225890_593038896110621_3301588342167660925_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=173fa1&_nc_ohc=wkuUxnp-W5MAX-NNWf7&_nc_ht=scontent.fsof9-1.fna&oh=00_AfAajgA-9vI0oU64-kiaX8lwoua-K2DSUltSntSQ_oT5mA&oe=65BE9C76"
              alt="asd"
              layout="fullWidth"
              transformOptions={{
                duotone: {
                  shadow: "#222222",
                  highlight: "#222222",
                  opacity: 20,
                },
              }}
            />
          }
        />
        <HeadCard
          name="Bulgari"
          Img={
            <StaticImage
              src="https://webnews.bg/uploads/images/83/7083/337083/768x432.jpg?_=1517236170"
              alt="asd"
              layout="fullWidth"
              transformOptions={{
                duotone: {
                  shadow: "#222222",
                  highlight: "#222222",
                  opacity: 20,
                },
              }}
            />
          }
        />
        <HeadCard
          name="Rezovo"
          Img={
            <StaticImage
              src="https://plaj.guru/wp-content/uploads/%D0%A5-%D0%A0%D0%B5%D0%B7%D0%BE%D0%B2%D0%BE-%D1%87%D0%B5%D0%BB%D0%BD%D0%B0-%D1%81%D0%BD%D0%B8%D0%BC%D0%BA%D0%B0-DJI_0149-scaled.jpg"
              alt="asd"
              layout="fullWidth"
              transformOptions={{
                duotone: {
                  shadow: "#222222",
                  highlight: "#222222",
                  opacity: 20,
                },
              }}
            />
          }
        />
        <HeadCard
          name="Brodilovo"
          Img={
            <StaticImage
              src="https://www.tsarevo.info/files/images/2011/09/selo-brodilovo.jpg"
              alt="asd"
              layout="fullWidth"
              transformOptions={{
                duotone: {
                  shadow: "#222222",
                  highlight: "#222222",
                  opacity: 20,
                },
              }}
            />
          }
        />
        <HeadCard
          name="Velika"
          Img={
            <StaticImage
              src="https://www.tsarevo.info/files/images/2011/09/selo-velika.jpg"
              alt="asd"
              layout="fullWidth"
              transformOptions={{
                duotone: {
                  shadow: "#222222",
                  highlight: "#222222",
                  opacity: 20,
                },
              }}
            />
          }
        /> */}
      </Container>
    </>
  );
};

export default IndexPage;
