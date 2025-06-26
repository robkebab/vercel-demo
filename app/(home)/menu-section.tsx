import * as React from "react";
import { MenuCard } from "@/components/molecules/menu-card";

const menuItems = [
  {
    description: "Crispy fried chicken wings tossed in your choice of sauce.",
    image: "/images/wings.jpg",
    title: "Classic Wings",
  },
  {
    description: "Tender boneless chicken pieces, perfect for dipping.",
    image: "/images/boneless.jpg",
    title: "Boneless Bites",
  },
  {
    description: "Golden fries with our signature seasoning blend.",
    image: "/images/fries.jpg",
    title: "Seasoned Fries",
  },
];

export function MenuSection() {
  return (
    <section
      id="menu"
      className="w-full py-12 px-4 md:px-16 bg-background flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-primary font-sans mb-8 text-center">
        Explore the full menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {menuItems.map((item) => (
          <MenuCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
            cta="Order Now"
          />
        ))}
      </div>
    </section>
  );
}
