import { Button } from "@/components/ui/button";
import SplitText from "@/components/SplitText";

const IntroSection = () => {
  return (
    <>
      <section className="flex flex-col items-center w-full pt-25 pb-10 px-5 md:px-10 space-y-10">
        {/* Title */}

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-10 text-center">
          <SplitText
            text="YALE SCHOOL OF"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={IntroSection}
          />

          <SplitText
            text="ART"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#B77466]"
            delay={120}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={IntroSection}
          />
        </div>

        {/* Paragraph */}
        <div className="text-center space-y-4 lg:py-4">
          <p className="text-xs sm:text-sm md:text-md font-bold text-[#57595B] max-w-xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
            The School of Art is one of Yale’s Graduate & Professional Schools
            conferring MFA degrees in Graphic Design, Painting/Printmaking,
            Photography, and Sculpture; and offers undergraduate-level art
            courses to Yale College students. Our website exists as an ongoing
            collaborative experiment in digital publishing and information
            sharing. It functions as a wiki—all members of the School of Art
            community have the ability to add new, and edit most existing
            content.
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row justify-center gap-4 sm:gap-10 py-10">
            <Button className="px-8 py-4 text-sm sm:text-md font-bold">
              Edit This Page
            </Button>
            <Button className="bg-[#E8D1C5] text-primary px-8 py-4 text-sm sm:text-md font-bold hover:bg-[#E8D1C5] hover:text-primary">
              Page History
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
