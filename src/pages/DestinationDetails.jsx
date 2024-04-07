import { useParams } from "react-router-dom";

const DestinationDetails = () => {
  const { id } = useParams();
  return (
    <div className="relative inset-0 flex items-center justify-center h-screen bg-[#05020B] text-white">
      <h2>destination details</h2>
      <h2>destination id: {id}</h2>
    </div>
  );
};

export default DestinationDetails;
