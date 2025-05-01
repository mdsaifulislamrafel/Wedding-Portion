

const GalleryImage = () => {

  const galleryImages =[
    {
      "id": 1,
      "section": "left",
      "position": "top-left",
      "width": "1/2",
      "src": "https://images.unsplash.com/photo-1671785923440-a6240e53fd46?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "gallery image 1"
    },
    {
      "id": 2,
      "section": "left",
      "position": "top-right",
      "width": "1/2",
      "src": "https://plus.unsplash.com/premium_photo-1675107360158-1508c9194307?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "gallery image 2"
    },
    {
      "id": 3,
      "section": "left",
      "position": "bottom",
      "width": "full",
      "src": "https://images.unsplash.com/photo-1686628322279-7e8c83cde0f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "gallery image 3"
    },
    {
      "id": 4,
      "section": "right",
      "position": "top",
      "width": "full",
      "src": "https://plus.unsplash.com/premium_photo-1661322734847-48396e9c4584?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "gallery image 4"
    },
    {
      "id": 5,
      "section": "right",
      "position": "bottom-left",
      "width": "1/2",
      "src": "https://images.unsplash.com/photo-1657702221334-abbba3728197?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "gallery image 5"
    },
    {
      "id": 6,
      "section": "right",
      "position": "bottom-right",
      "width": "1/2",
      "src": "https://images.unsplash.com/photo-1523604036161-c602f60bb5f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "gallery image 6"
    }
  ]
  

  const leftSectionImages = galleryImages.filter(img => img.section === "left");
  const rightSectionImages = galleryImages.filter(img => img.section === "right");

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            {/* Left Section */}
            <div className="flex flex-wrap w-1/2">
              {leftSectionImages.map((image) => (
                <div 
                  key={image.id} 
                  className={`md:p-2 p-1 w-${image.width}`}
                >
                  <img
                    alt={image.alt}
                    className="w-full object-cover h-full object-center block"
                    src={image.src}
                  />
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex flex-wrap w-1/2">
              {rightSectionImages.map((image) => (
                <div 
                  key={image.id} 
                  className={`md:p-2 p-1 w-${image.width}`}
                >
                  <img
                    alt={image.alt}
                    className="w-full object-cover h-full object-center block"
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryImage;
