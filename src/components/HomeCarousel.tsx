import { Carousel } from "flowbite-react";

import budgetComputer from "../pic/budgetcomputer.png";
import budgetHand from "../pic/budgethand.png";
import bugetphone from "../pic/budgetphone.png";
import exampleGraph from "../pic/examplegraph.png";

export function HomeCarousel() {
  const slides = [
    { src: budgetComputer, alt: "Budget on computer" },
    { src: budgetHand, alt: "Budget by hand" },
    { src: bugetphone, alt: "Budget on phone" },
    { src: exampleGraph, alt: "Example graph" },
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {slides.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
}
