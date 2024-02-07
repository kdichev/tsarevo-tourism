import {
  ArrowForward,
  CurrencyExchange,
  Description,
  Facebook,
  FacebookOutlined,
  HealthAndSafety,
  Inbox,
  Instagram,
  Language,
  Lock,
  Menu,
  Phone,
  Power,
  SafetyCheck,
  Search,
  Smartphone,
  Star,
  Translate,
  Twitter,
  WbSunny,
  YouTube,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { StaticImage } from "gatsby-plugin-image";
import { CardActionArea } from "gatsby-theme-material-ui";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  autoplaySpeed: 10000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,

  nextArrow: (
    <Box
      sx={{
        position: "absolute",
        top: "0%",
        right: "0 !important",
        mr: 2,
        mt: 3,
      }}
    >
      {">"}
    </Box>
  ),
  prevArrow: (
    <Box
      sx={{
        position: "absolute",
        top: "0%",
        left: "0 !important",
        ml: 2,
        mt: 3,
        zIndex: 1,
      }}
    >
      {"<"}
    </Box>
  ),
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const settings1 = {
  infinite: true,
  speed: 500,
  autoplaySpeed: 12000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,

  nextArrow: (
    <Box
      sx={{
        position: "absolute",
        top: "0%",
        right: "0 !important",
        mr: 3,
        mt: 4,
      }}
    >
      {">"}
    </Box>
  ),
  prevArrow: (
    <Box
      sx={{
        position: "absolute",
        top: "0%",
        left: "0 !important",
        ml: 3,
        mt: 4,
        zIndex: 1,
      }}
    >
      {"<"}
    </Box>
  ),
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const HeadCard = ({ name, Img, text }) => (
  <Box component={"span"}>
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
        <Toolbar component={Container}>
          <IconButton sx={{ color: !a ? "white" : "black" }} disableRipple>
            <Menu />
          </IconButton>
          <Box flex={1} />
          <Box sx={{ display: a ? "none" : "block" }}>
            <StaticImage
              src="./../logo-visit-tsarevo.png"
              layout="fixed"
              width={225}
              alt="asd"
              placeholder="none"
            />
          </Box>
          <Box sx={{ display: !a ? "none" : "block" }}>
            <StaticImage
              src="./../logo-black.png"
              layout="fixed"
              width={225}
              alt="asd"
              placeholder="none"
            />
          </Box>
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
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <StaticImage
            src="./../test-2-cover.jpg"
            alt="asd"
            layout="fullWidth"
            transformOptions={{
              duotone: { opacity: 25, highlight: "#1e2329", shadow: "#1e2329" },
            }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <StaticImage
            src="./../hero-plaj-3.jpg"
            alt="asd"
            layout="fullWidth"
            transformOptions={{
              duotone: { opacity: 25, highlight: "#1e2329", shadow: "#1e2329" },
            }}
          />
        </Box>
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
                // textShadow: "black 1px 0 20px",
                typography: { xs: "h3", md: "h2" },
                fontWeight: "bolder !important",
              }}
              fontWeight="bolder"
              color="white"
              gutterBottom
            >
              Enjoy the beauty of Tsarevo
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
            <TextField
              variant="outlined"
              color="primary"
              size="small"
              sx={{
                background: "white",
                borderRadius: 8,
                maxWidth: 500,
                display: { xs: "none", md: "flex" },
                mb: { xs: 0, md: 4 },
              }}
              placeholder="Where do you want to go....?"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Divider orientation="vertical" />
                    <IconButton edge="end">
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>
      <Container sx={{ mt: 2 }} maxWidth="md">
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={"bolder"}
          textAlign={"center"}
          sx={{ mt: 4 }}
        >
          Have unforgettable experiences
        </Typography>
        <Typography
          paragraph
          textAlign={"center"}
          variant="body2"
          sx={{ fontSize: 18 }}
        >
          With its unique cuisine, rich culture, some of the most beautiful
          beaches in the world, breathtaking waterfalls, and adventure for
          everyone’s liking, all you have to do is choose the perfect type of
          tourism for you and be amazed by the wonders of Tsarevo.
        </Typography>
      </Container>

      <Container sx={{ mt: 2 }}>
        <Grid2 container spacing={4}>
          <Grid2 xl={6} xs={12}>
            <Card>
              <StaticImage
                src="https://as2.ftcdn.net/v2/jpg/02/79/08/53/1000_F_279085351_pHDUnRXTeCKo1pWxNo3IBa06qwGvUrU9.jpg"
                alt="asd"
                layout="fullWidth"
                transformOptions={{
                  duotone: {
                    opacity: 25,
                    highlight: "#1e2329",
                    shadow: "#1e2329",
                  },
                }}
              />
            </Card>
          </Grid2>
          <Grid2 xl={6} xs={12}>
            <Typography variant="h4" gutterBottom fontWeight={"bolder"}>
              Dive into Bliss: Tsarevo's Summer Beach Season Beckons!
            </Typography>
            <Typography sx={{ fontSize: 18 }}>
              Embrace the allure of Tsarevo's sun-kissed shores this summer!
              With pristine beaches stretching along the Black Sea coastline,
              Tsarevo offers an unforgettable escape for beach enthusiasts. Dive
              into crystal-clear waters, bask in the warmth of the golden sun,
              and unwind amidst breathtaking scenery.
            </Typography>
            <Button size="large" variant="outlined" sx={{ mt: 2 }}>
              READ MORE
            </Button>
          </Grid2>
        </Grid2>
        <Box
          display="flex"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            fontWeight={"bolder"}
            sx={{ mt: 2 }}
          >
            Best places to visit
          </Typography>
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <Button variant="outlined" endIcon={<ArrowForward />} size="small">
              Explore more
            </Button>
          </Box>
        </Box>
        <Grid2
          container
          component={Slider}
          {...settings1}
          // arrows={false}
          spacing={1}
          slidesToShow={4}
        >
          <Grid2 xs={6} md={2}>
            <Card>
              <Box sx={{ position: "relative" }}>
                <StaticImage
                  src="https://milenavillalba.com/wp-content/uploads/2015/10/12-Llu%C3%ADs-Bort-Photographer-Exposici%C3%B3n-en-la-Campaneta-de-Sustancia-Quemada-e1446221355678.jpg"
                  alt="asd"
                  layout="fullWidth"
                />
                <Box sx={{ position: "absolute", top: 0, right: 0, m: 1 }}>
                  <Chip label="arts & culture" color="secondary" size="small" />
                </Box>
              </Box>
              <CardContent>
                <Typography variant="caption">LOZENETS</Typography>
                <Typography variant="body1">
                  Lozenets Museum of Modern Art: Unveiling the Contemporary
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="caption">
                    4.5 <Star fontSize={"inherit"} sx={{ color: "orange" }} />
                  </Typography>
                  <Box display="flex" sx={{ alignItems: "end" }}>
                    <Typography variant="caption">FROM</Typography>
                    <Typography fontWeight={"bold"} sx={{ ml: 0.5 }}>
                      19 BGN
                    </Typography>
                  </Box>
                </Box>
                <Button fullWidth variant="contained">
                  GET YOUR TICKETS
                </Button>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={6} md={2}>
            <Card>
              <Box sx={{ position: "relative" }}>
                <StaticImage
                  src="https://www.sunnybeach.com/files/what_to_visit_objects/355/16045333033208.jpg"
                  alt="asd"
                  layout="fullWidth"
                />
                <Box sx={{ position: "absolute", top: 0, right: 0, m: 1 }}>
                  <Chip label="arts & culture" color="secondary" size="small" />
                </Box>
              </Box>

              <CardContent>
                <Typography variant="caption">TSAREVO</Typography>
                <Typography variant="body1">
                  A Journey through Time at the Tsarevo Municipal Historical...
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="caption">
                    4.5 <Star fontSize={"inherit"} sx={{ color: "orange" }} />
                  </Typography>
                  <Box display="flex" sx={{ alignItems: "end" }}>
                    <Typography variant="caption">FROM</Typography>
                    <Typography fontWeight={"bold"} sx={{ ml: 0.5 }}>
                      7 BGN
                    </Typography>
                  </Box>
                </Box>
                <Button fullWidth variant="contained">
                  GET YOUR TICKETS
                </Button>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={6} md={2}>
            <Card>
              <Box sx={{ position: "relative" }}>
                <StaticImage
                  src="https://stock.evgenidinev.com/photo/blacksea-34823ds.jpg"
                  alt="asd"
                  layout="fullWidth"
                />
                <Box sx={{ position: "absolute", top: 0, right: 0, m: 1 }}>
                  <Chip label="adventure" color="secondary" size="small" />
                </Box>
              </Box>
              <CardContent>
                <Typography variant="caption">SINEMORETS</Typography>
                <Typography variant="body1">
                  Veleka River Adventure: Unforgettable Kayaking Journey
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="caption">
                    4.2 <Star fontSize={"inherit"} sx={{ color: "orange" }} />
                  </Typography>
                  <Box display="flex" sx={{ alignItems: "end" }}>
                    <Typography variant="caption">FROM</Typography>
                    <Typography fontWeight={"bold"} sx={{ ml: 0.5 }}>
                      29 BGN
                    </Typography>
                  </Box>
                </Box>
                <Button fullWidth variant="contained">
                  GET YOUR TICKETS
                </Button>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={6} md={2}>
            <Card>
              <StaticImage
                src="./../brodilovo-razkopki.jpg"
                alt="asd"
                layout="fullWidth"
              />
              <CardContent>
                <Typography variant="caption">BRODILOVO</Typography>
                <Typography variant="body1">
                  Ruler's house in Brodilovo and its history over the centuries
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="caption">
                    4.2 <Star fontSize={"inherit"} sx={{ color: "orange" }} />
                  </Typography>
                  <Box display="flex" sx={{ alignItems: "end" }}>
                    <Typography variant="caption">FROM</Typography>
                    <Typography fontWeight={"bold"} sx={{ ml: 0.5 }}>
                      20 BGN
                    </Typography>
                  </Box>
                </Box>
                <Button fullWidth variant="contained">
                  GET YOUR TICKETS
                </Button>
              </CardContent>
            </Card>
          </Grid2>
          {/* <Grid2 xs={6} md={2}>
            <Card>
              <StaticImage
                src="https://museumtsarevo.com/images/25_1_b.JPG"
                alt="asd"
                layout="fullWidth"
              />
              <CardContent>
                <Typography variant="caption">AHTOPOL</Typography>
                <Typography variant="body1">
                  The Late Antique and Medieval Fortress Exhibition in Ahtopol
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="caption">
                    4.2 <Star fontSize={"inherit"} sx={{ color: "orange" }} />
                  </Typography>
                  <Box display="flex" sx={{ alignItems: "end" }}>
                    <Typography variant="caption">FROM</Typography>
                    <Typography fontWeight={"bold"} sx={{ ml: 0.5 }}>
                      20 BGN
                    </Typography>
                  </Box>
                </Box>
                <Button fullWidth variant="contained">
                  GET YOUR TICKETS
                </Button>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 xs={6} md={2}>
            <Card>
              <StaticImage
                src="https://museumtsarevo.com/images/11_1_b.jpg"
                alt="asd"
                layout="fullWidth"
              />
              <CardContent>
                <Typography variant="caption">SINEMORETS</Typography>
                <Typography variant="body1">
                  Medieval Fortified Ruler's Residence in Sinemorets
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="caption">
                    4.2 <Star fontSize={"inherit"} sx={{ color: "orange" }} />
                  </Typography>
                  <Box display="flex" sx={{ alignItems: "end" }}>
                    <Typography variant="caption">FROM</Typography>
                    <Typography fontWeight={"bold"} sx={{ ml: 0.5 }}>
                      20 BGN
                    </Typography>
                  </Box>
                </Box>
                <Button fullWidth variant="contained">
                  GET YOUR TICKETS
                </Button>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={6} md={2}>
            <Card>
              <StaticImage
                src="https://www.veleka.bg/wp-content/uploads/2017/04/home-bg_mini.jpg"
                alt="asd"
                layout="fullWidth"
              />
              <CardContent>
                <Typography variant="caption">SINEMORETS</Typography>
                <Typography variant="body1">
                  Discover the Magic of Veleka: A Serene River Boat Adventure
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Typography variant="caption">
                    4.2 <Star fontSize={"inherit"} sx={{ color: "orange" }} />
                  </Typography>
                  <Box display="flex" sx={{ alignItems: "end" }}>
                    <Typography variant="caption">FROM</Typography>
                    <Typography fontWeight={"bold"} sx={{ ml: 0.5 }}>
                      20 BGN
                    </Typography>
                  </Box>
                </Box>
                <Button fullWidth variant="contained">
                  GET YOUR TICKETS
                </Button>
              </CardContent>
            </Card>
          </Grid2> */}
        </Grid2>
        <Box
          sx={{
            display: { lg: "none", xs: "flex" },
            justifyContent: "center",
            mb: 3,
            mt: 2,
          }}
        >
          <Button variant="outlined" endIcon={<ArrowForward />} fullWidth>
            Explore more
          </Button>
        </Box>

        <Typography
          variant="h5"
          gutterBottom
          fontWeight={"bolder"}
          sx={{ mt: 2 }}
        >
          Destinations
        </Typography>
        <Grid2
          container
          component={Slider}
          {...settings}
          // arrows={false}
          spacing={1}
        >
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
          variant="h5"
          gutterBottom
          fontWeight={"bolder"}
          sx={{ mt: 2 }}
        >
          Our pristine beaches
        </Typography>
        <Grid2
          container
          spacing={3}
          component={Slider}
          {...settings1}
          // arrows={false}
        >
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
                  src="https://bookvila.bg/img/210616033443.jpg"
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

        <Typography
          variant="h5"
          gutterBottom
          fontWeight={"bolder"}
          sx={{ mt: 2 }}
        >
          What to do
        </Typography>
        <Grid2
          container
          spacing={3}
          component={Slider}
          {...settings1}
          // arrows={false}
        >
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Sun and beach"
              text="Discover the ultimate beach getaway where endless sunshine, crystal-clear waters, and golden sands invite you to elax, play, and create unforgettable memories"
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
              name="Hiking"
              text="Explore the breathtaking landscapes of our area on foot and immerse yourself in the beauty of nature through our premier hiking tourism adventures"
              Img={
                <StaticImage
                  src="https://bulgaria-mt.marlenablacksea.eu/novini/43.jpg"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Biking"
              text="Experience the thrill of biking Strandzha area, where every pedal brings a new adventure amidst breathtaking landscapes."
              Img={
                <StaticImage
                  src="https://aceraft.com/wp-content/uploads/2019/05/new-river-gorge-guided-mountain-biking-9-2500x1634.jpg"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Sailing"
              text="Explore the breathtaking beauty of our coastlines and experience the thrill of the open sea with our unforgettable sailing abilities"
              Img={
                <StaticImage
                  src="https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/370567963_10227620904125812_3090857089712290358_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c42490&_nc_ohc=MNco6o5Y-s0AX-CCJHA&_nc_ht=scontent.fsof8-1.fna&oh=00_AfBTaemZ_M76_EREJKhrnXdkJSKvXcHj-8-uSrljv0-XOQ&oe=65C552A1"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Fishing"
              text="Experience the thrill of sea fishing tourism, where every cast in our pristine waters offers a chance to reel in the catch of a lifetime"
              Img={
                <StaticImage
                  src="https://www.marinemax.com/-/media/images/marinemax/callouts/new-to-boating-manual-callout/offshore-fishing-boat-outrage-04092020.jpg?h=2662&w=4000&la=en&hash=0AA490BAB688C0974C192FDB7570CD49"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <HeadCard
              name="Surfing"
              text="Experience the thrill of riding the waves in our area, where endless surf and stunning coastlines promise the ultimate surfing adventure"
              Img={
                <StaticImage
                  src="https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/368011155_10227499037879232_77738777917131161_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c42490&_nc_ohc=WJQh_7kwIL4AX_QqaSI&_nc_ht=scontent.fsof8-1.fna&oh=00_AfAiWFiMUt6MQabU0jQSf3-C8pvialG0ieiv_zyykHi7Uw&oe=65C3D1DF"
                  alt="asd"
                  layout="fullWidth"
                  style={{ height: 190 }}
                />
              }
            />
          </Grid2>
        </Grid2>
        <Container sx={{ mt: 2 }}>
          <Grid2 container spacing={4}>
            <Grid2 xl={6} xs={12}>
              <Card>
                <StaticImage
                  src="./../nestinari-promo.jpg"
                  alt="asd"
                  layout="fullWidth"
                  transformOptions={{
                    duotone: {
                      opacity: 25,
                      highlight: "#1e2329",
                      shadow: "#1e2329",
                    },
                  }}
                />
              </Card>
            </Grid2>
            <Grid2 xl={6}>
              <Typography variant="h4" gutterBottom fontWeight={"bolder"}>
                Discover Bulgari's traditional Nestinari culture and way of life
              </Typography>
              <Typography sx={{ fontSize: 18 }}>
                Step into the mesmerizing world of Bulgarian culture with our
                exclusive Nestinari Tradition experience in the quaint village
                of Bulgari!
              </Typography>
              <Button size="large" variant="outlined" sx={{ mt: 2 }}>
                READ MORE
              </Button>
            </Grid2>
          </Grid2>
        </Container>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={"bolder"}
          textAlign={"center"}
          sx={{ mt: 4 }}
        >
          Traveling around Tsarevo
        </Typography>
        <Typography textAlign={"center"} sx={{ mb: 4 }}>
          All the necessary information for your trip around Brazil is here.
        </Typography>
        <Grid2 container spacing={2} sx={{ mb: 4 }}>
          <Grid2 md={4}>
            <ListItemButton>
              <ListItemIcon>
                <HealthAndSafety color="primary" />
              </ListItemIcon>
              <ListItemText primary="Health" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <Lock color="primary" />
              </ListItemIcon>
              <ListItemText primary="Safety" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <Description color="primary" />
              </ListItemIcon>
              <ListItemText primary="Visa and Travel Papers" />
            </ListItemButton>
          </Grid2>
          <Grid2 md={4}>
            <ListItemButton>
              <ListItemIcon>
                <Phone color="primary" />
              </ListItemIcon>
              <ListItemText primary="Emergency Numbers" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <Power color="primary" />
              </ListItemIcon>
              <ListItemText primary="Power" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <WbSunny color="primary" />
              </ListItemIcon>
              <ListItemText primary="Local Weather" />
            </ListItemButton>
          </Grid2>
          <Grid2 md={4}>
            <ListItemButton>
              <ListItemIcon>
                <Smartphone color="primary" />
              </ListItemIcon>
              <ListItemText primary="Telecommunications" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <Translate color="primary" />
              </ListItemIcon>
              <ListItemText primary="Language" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <CurrencyExchange color="primary" />
              </ListItemIcon>
              <ListItemText primary="Currency" />
            </ListItemButton>
          </Grid2>
        </Grid2>
      </Container>

      {/* <Box
        sx={{
          width: "100%",
          pt: 8,
          pb: 8,
          backgroundColor: "primary.light",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          fontWeight={"bolder"}
          sx={{
            color: "primary.contrastText",
            typography: { xs: "h2", md: "h1" },
          }}
        >
          #VisitTsarevo
        </Typography>
      </Box> */}
      <Box
        sx={(theme) => ({
          pt: 2,
          pb: 2,
        })}
      >
        <Container>
          <Grid2 container>
            <Grid2 xs={12} md={4}>
              <StaticImage
                src="./../logo-black.png"
                layout="fixed"
                width={225}
                alt="asd"
                placeholder="none"
              />
              <Box display="flex" mt={1} mb={1}>
                <Box>
                  <FacebookOutlined />
                </Box>
                <Box ml={1}>
                  <Instagram />
                </Box>
                <Box ml={1}>
                  <YouTube />
                </Box>
                <Box ml={1}>
                  {" "}
                  <Twitter />
                </Box>
              </Box>
              <Typography variant="body2">
                Visit Tsarevo is the first independent promoting channel for
                Tsarevo in the world. Discover great holiday ideas for family
                holidays, weekends away, short breaks and days out in Tsarevo.
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
};

export default IndexPage;
