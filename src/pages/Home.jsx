import bgImage from "../assets/images/rectangle1.png";

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
      <h2 className="text-center text-6xl text-white">This is homepage</h2>
    </div>
  );
};

export default Home;
