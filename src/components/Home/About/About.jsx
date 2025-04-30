const About = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Photographer" 
                className="rounded shadow-lg w-full md:w-[400px] h-[500px]"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">WHO AM I?</h2>
              <p className="mb-4">
                <span className="text-blue-600 font-medium">Jerry Siddiquis</span> is a Rangpur-based Photographer, who 
                specializes in wedding photography. He has been a professional photographer for the last 5 years and has a 
                team of photographers. He is the founder of <span className="text-blue-600 font-medium">Wedding Portion</span>.
              </p>
              <p className="mb-4">
                With a passion for capturing authentic moments and creating timeless memories, our team brings creativity
                and professionalism to every wedding we photograph.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default About;