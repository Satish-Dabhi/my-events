// import MyCarousel from '../components/MyCarousel';
// import { Parallax } from "react-parallax";
// import homeImage from '../assets/event-home4.jpg';
// import Typewriter from 'typewriter-effect';
import { Container, Grid, Typography } from '@mui/material';
import MyCarousel from "../components/MyCarousel";
import EventCard from "../components/event/EventCard";
import EventCategories from '../components/event/EventCategories';

const eventsArray = [
  {
    "eventNo": 1,
    "eventName": "Birthday Party",
    "date": "Sun, Jun 12, 2024",
    "address": "123 Main St",
    "owner": "John Doe",
    "description": "Come and celebrate John's 30th birthday with a fun-filled party. There will be delicious food, exciting games, and live music."
  },
  {
    "eventNo": 2,
    "eventName": "Wedding Ceremony",
    "date": "Fri, Aug 23, 2024",
    "address": "456 Elm St",
    "owner": "Jane Smith",
    "description": "Join us in celebrating the union of Jane and Michael as they exchange vows and begin their journey together. Reception to follow."
  },
  {
    "eventNo": 3,
    "eventName": "Music Concert",
    "date": "Sat, Sep 14, 2024",
    "address": "789 Oak St",
    "owner": "Alex Johnson",
    "description": "Experience an unforgettable night of live music featuring renowned artists from various genres. Get ready to dance and sing along!"
  },
  {
    "eventNo": 4,
    "eventName": "Art Exhibition",
    "date": "Sun, Oct 20, 2024",
    "address": "321 Pine St",
    "owner": "Emily Brown",
    "description": "Discover a world of creativity at our art exhibition showcasing captivating paintings, sculptures, and mixed media works by talented artists."
  },
  {
    "eventNo": 3,
    "eventName": "Conference",
    "date": "Thu, Nov 7, 2024",
    "address": "987 Maple St",
    "owner": "David Wilson",
    "description": "Join industry experts and thought leaders for a day of insightful talks, panel discussions, and networking opportunities."
  },
  {
    "eventNo": 2,
    "eventName": "Charity Gala",
    "date": "Sat, Dec 14, 2024",
    "address": "654 Cedar St",
    "owner": "Sarah Anderson",
    "description": "Support a great cause at our glamorous charity gala. Enjoy a delightful evening of fine dining, live entertainment, and auctions."
  },
  {
    "eventNo": 6,
    "eventName": "Sports Tournament",
    "date": "Sun, Jan 19, 2025",
    "address": "789 Oak St",
    "owner": "Alex Johnson",
    "description": "Cheer on your favorite teams as they compete in an action-packed sports tournament. Witness incredible skills and fierce competition."
  },
  {
    "eventNo": 4,
    "eventName": "Film Festival",
    "date": "Sat, Feb 8, 2025",
    "address": "123 Main St",
    "owner": "John Doe",
    "description": "Immerse yourself in the magic of cinema at our film festival. Enjoy a curated selection of international films and engage in post-screening discussions."
  },
  {
    "eventNo": 3,
    "eventName": "Fashion Show",
    "date": "Thu, Mar 27, 2025",
    "address": "456 Elm St",
    "owner": "Jane Smith",
    "description": "Witness the latest fashion trends on the runway as talented designers showcase their stunning collections in an extravagant fashion show."
  }
]

const Home = () => {
  return (
    <>
      <MyCarousel />
      <Container maxWidth="lg" sx={{ paddingTop: '70px' }}>
        <EventCategories />

        <Typography variant="h4" gutterBottom>
          Popular Events :
        </Typography>
        <Grid container spacing={2}>
          {eventsArray &&
            eventsArray.length > 0 &&
            eventsArray.map((property) => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={3}>
                    <EventCard propertyDetails={property} />
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
