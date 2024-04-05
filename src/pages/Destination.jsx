import bgImage from "../assets/images/rectangle1.png";

const Destination = () => {
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
      <h2 className="text-4xl text-white ">Destination Page</h2>
    </div>
  );
};

export default Destination;
