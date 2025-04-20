import { Carousel } from "flowbite-react";

export function HomeCarousel() {
  return (
    
    <div className="w-66 mx-22  sm:h-66  overflow-hidden">
      <Carousel>
        <img
          src="/pic/budgetcomputer.png"
          alt="Budget on computer"
          
        />
        <img
          src="/pic/budgethand.png"
          alt="Budget by hand"
          
        />
        <img
          src="/pic/budgetphone.png"
          alt="Budget on phone"
          
        />
        <img
          src="/pic/examplegraph.png"
          alt="Example graph"
          
        />
      </Carousel>
    </div>
  );
}
