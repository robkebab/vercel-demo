import Image from "next/image";

interface Location {
  address: string;
  alt: string;
  hours: string[];
  image: string;
  name: string;
}

const LOCATIONS: Location[] = [
  {
    address: "424 S Lamar Blvd, Austin, TX 78704",
    alt: "Barton Springs Saloon outdoor seating",
    hours: ["Mon - Thu: 5PM - 12AM", "Fri - Sun: 3PM - 12AM"],
    image: "/images/bs-saloon.png",
    name: "BARTON SPRINGS SALOON",
  },
  {
    address: "3808 S Congress Ave, Austin, TX 78704",
    alt: "The 04 Lounge entrance",
    hours: [
      "Mon - Tue: Closed",
      "Wed - Fri: 6PM - 1AM",
      "Sat - Sun: 1PM - 1AM",
    ],
    image: "/images/four-lounge.png",
    name: "THE 04 LOUNGE",
  },
  {
    address: "3504 Montopolis Dr. Austin, TX",
    alt: "Radio East sign",
    hours: ["Mon - Sun: 12PM - 10PM"],
    image: "/images/radio-east.png",
    name: "RADIO EAST",
  },
];

export function HomeLocations() {
  return (
    <section
      id="locations"
      className="w-full flex flex-col items-center py-16 md:py-28 bg-background text-primary"
    >
      <h2 className="font-accent text-4xl md:text-6xl font-extrabold text-primary text-center mb-12 md:mb-20 tracking-tight">
        COME ON
        <br className="md:hidden" /> DOWN!
      </h2>
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center w-full max-w-5xl">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.name}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-lg mb-6">
              <Image
                src={loc.image}
                alt={loc.alt}
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority={false}
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-primary mb-1 tracking-wide">
              {loc.name}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-1">
              {loc.address}
            </p>
            <div className="text-sm md:text-base text-muted-foreground">
              {loc.hours.map((h) => (
                <div key={h}>{h}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
