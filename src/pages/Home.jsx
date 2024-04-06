import bgImage from "../assets/images/rectangle1.png";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div
      className={`relative inset-0 flex items-center justify-center h-screen`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxSizing: "border-box",
      }}
    >
      <Hero></Hero>
    </div>
  );
};

export default Home;
