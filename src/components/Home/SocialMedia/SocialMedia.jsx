import { Facebook, Instagram, Youtube } from "lucide-react";

const SocialMedia = () => {
  return (
    <div>
      <section className="py-16 bg-slate-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">FOLLOW US</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Facebook size={24} color="white" />
            </a>
            <a
              href="#"
              className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              <Instagram size={24} color="white" />
            </a>
            <a
              href="#"
              className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
            >
              <Youtube size={24} color="white" />
            </a>
          </div>
        </div>
      </section>
      {/* map */}
      <section className="w-[70%] h-96 mx-auto my-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.274385633384!2d90.39871507602268!3d23.737592889266644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e57e7da4f%3A0x74e25e8dd9557872!2sRamna%20Park!5e0!3m2!1sen!2sbd!4v1746012626530!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default SocialMedia;
