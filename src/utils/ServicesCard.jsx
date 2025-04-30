const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:transform hover:scale-105 bg-white w-full md:w-[400px] h-[300px] md:h-[400px] rounded-lg shadow-lg hover:shadow-xl">
        <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center mb-6 border-4 border-yellow-400">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded">
          DETAILS
        </button>
      </div>
    );
  };

  export default ServiceCard;