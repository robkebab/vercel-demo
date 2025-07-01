import React from "react";

export function HomeAbout() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center py-16 md:py-28 bg-background text-primary px-2 md:px-4"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center px-4">
        {/* Left: Headline */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-base md:text-lg text-orange-500 font-medium mb-4 tracking-widest uppercase">
            ABOUT US
          </span>
          <h2 className="font-accent text-3xl md:text-5xl font-extrabold text-primary mb-6 md:mb-0 leading-tight md:leading-tight">
            WE LIKE
            <br /> TO FRENCH
          </h2>
          <p className="font-accent text-primary">(CUT OUR WINGS)</p>
        </div>
        {/* Right: Story */}
        <div className="flex-1 flex flex-col gap-6 text-sm md:text-base text-muted-foreground max-w-xl">
          <p>
            If you&apos;re looking to up your chicken wing game, there&apos;s a
            spot downtown you&apos;ll most definitely want to try. Tommy Want
            Wingy is located [Barton Springs Saloon, The 04 Lounge, Radio East].
            The wings are tasty and the story behind this business is even
            better.
          </p>
          <p>
            We put a lot of love into our work and you can tell when it comes
            out, said owner Neil O&apos;Quinn. Neil and his brother, Shawn, had
            a love of chicken wings and a bright idea.
          </p>
          <p>
            We were just making them at home all the time, we used to live
            together, making them for our friends and family every weekend and
            said, &apos;Well, lets try it out, see if we can make this a
            business,&apos; said co-owner Shawn.
          </p>
          <p>
            But their business needed a catchy name to tack onto the side of
            their bright-yellow food truck. Growing up in El Paso, the
            O&apos;Quinn brothers remember watching a lot of VHS tapes and they
            really liked the movie &quot;Tommy Boy.&quot; When we were thinking
            of names for it, it just hit, it stuck. That was it, said Neil.
          </p>
          <p className="mt-2">- Yvonne Nava, KVUE ABC.</p>
        </div>
      </div>
    </section>
  );
}
