// import MyCarousel from '../components/MyCarousel';
import { Parallax } from "react-parallax";
import homeImage from '../assets/event-home4.jpg';
import Typewriter from 'typewriter-effect';


const Home = () => {
  const insideStyles = {
    color: '#fff',
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "2rem"
  };
  return (
    <>
      {/* <MyCarousel /> */}
      <Parallax bgImage={homeImage} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Typewriter
              options={{
                strings: ['ASQUARE EVENTS', 'WE CREATE, YOU CELEBRATE'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </Parallax>
      <div>Home</div>
    </>
  );
};

export default Home;
