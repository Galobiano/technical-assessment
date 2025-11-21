import { Button } from "@/components/ui/button";

const IntroSection = () => {
  return (
    <section className="flex flex-col items-center space-y-10 py-25 w-full px-15">
      <h1 className="text-6xl text-primary">YALE SCHOOL OF ART</h1>
      <div className="text-center space-y-4 py-4">
        <p className="text-md font-bold text-[#57595B] max-w-5xl">
          The School of Art is one of Yale’s Graduate & Professional Schools
          conferring MFA degrees in Graphic Design, Painting/Printmaking,
          Photography, and Sculpture; and offers undergraduate-level art courses
          to Yale College students. Our website exists as an ongoing
          collaborative experiment in digital publishing and information
          sharing. It functions as a wiki—all members of the School of Art
          community have the ability to add new, and edit most existing content.
        </p>
        {/* <p>
          This website exists as an ongoing collaborative experiment in digital
          publishing and information sharing. Because this website functions as
          a wiki, all members of the School of Art community—graduate students,
          faculty, staff, and alums—have the ability to add new content and
          pages, and to edit most of the site’s existing content. Content is the
          property of its various authors. When you contribute to this site, you
          agree to abide by Yale University academic and network use policy, and
          to act as a responsible member of our community.
        </p> */}
        <div className="flex justify-center gap-10 py-10">
          <Button className="px-10 text-md py-5">Edit This Page</Button>
          <Button className="bg-[#E8D1C5] text-primary px-10 text-md py-5 hover:bg-[#E8D1C5] hover:text-primary">
            Page History
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
