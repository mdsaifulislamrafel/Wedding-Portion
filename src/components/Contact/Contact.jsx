import { Parallax } from "react-parallax";

const Contact = () => {
  return (
    <div>
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1653289755854-a41949e96282?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageAlt="Wedding background"
        strength={400}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      >
        <div className="relative h-96 md:h-[500px] flex items-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">CONTACT US</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div>
        </div>
      </Parallax>
      <section className="min-h-screen bg-gray-50 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Locations
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location 1 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Location 1
            </h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Address:</span> A/30 Chayabithi
              Eastern Housing, Middle Basabo, Sabujbag, Dhaka-1214.
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Contact:</span> 01521 109 832, 01979
              109 832
            </p>
          </div>

          {/* Location 2 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Location 2
            </h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Address:</span> 67, Noya Paltan,
              China Town Shopping Center, Noya Paltan, Dhaka-1000
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Contact:</span> 01521 109 832, 01979
              109 832
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
