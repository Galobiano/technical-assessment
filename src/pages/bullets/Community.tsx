import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { TbPinFilled } from "react-icons/tb";

const upperTopBullits = [
  {
    description:
      "The Yale Center for Environmental Justice is in the process of planning our fourth annual Global Environmental Justice Conference, with this year focusing on the theme of “Environmental Joy.” The conference aims to explore the ways in which environmental and climate justice and the communities engaged in that work generate joy. Guided by the notion that the ultimate goal of most environmental and climate work is to alleviate suffering and increase wellbeing, Environmental Joy will explore and celebrate the diverse ways that environmental justice achieves this goal. One facet of the conference programming we hope to organize is a juried art show soliciting works from artists around the world on the theme of Environmental Joy to be showcased in an exhibition during the conference.",
  },
  {
    description:
      "any discipline. As an option within Yale’s Summer Experience Award (SEA) funding model, the Arts Apprenticeship must fulfill the same basic requirements. Additional details, as well as those specific to the Arts Apprenticeship are included below. Yale faculty, alumni, or other arts practitioners interested in featuring positions through the program should contact Yale’s Creative Careers advisor. Which Opportunities are Eligible? Must be at least 30 hours/week, for at least 8-weeks over the summer months. Those 8-weeks do not have to be continuous if the mentoring Arts Practitioner agrees on a different schedule. The time commitment need not all be in direct contact with the Arts Practitioner. Independent projects, tasks, research, etc. can comprise much of the experience, as long as the Arts Practitioner is checking in regularly with the student to provide oversight and career-based context. ",
  },
];

const lowerDownBullits = [
  {
    description:
      "All members of the SoA community are invited to edit the majority of the wiki however they like, but we ask that any non-curricular projects or initiatives that you would like to share be added to this section of the homepage.",
  },
  {
    description:
      "Students are also invited to reach out to Assistant Director of Communications Lindsey Mancini if they would like additional support from the School in bringing attention to their work and endeavors.",
  },
  {
    description:
      "Hey everyone! I’ve been mapping public art in New Haven as part of my nonprofit project ArtAround and I’d love to invite you to join me, or just check it out and see what you think. ",
  },
];
const Community = () => {
  return (
    <div className=" h-full p-5 px-10 ">
      <h1 className="flex justify-center pt-10">Community Bulletin Board</h1>
      <div className="relative grid grid-cols-3 w-full gap-7 pt-5 max-w-7xl mx-auto mb-8">
        {lowerDownBullits.map((item, index) => (
          <Card
            key={index}
            className="group hover:bg-[#B77466] relative mb-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <CardHeader>
              <CardDescription className="group-hover:text-secondary transition-colors duration-300">
                {item.description}
              </CardDescription>
            </CardHeader>

            <span className="absolute -top-3 -left-3 rotate-[280deg]">
              <TbPinFilled className="size-7 text-[#B77466] group-hover:text-primary " />
            </span>
          </Card>
        ))}
      </div>

      <div className="relative grid grid-cols-2 w-full gap-7  max-w-5xl mx-auto mt-8 ">
        {upperTopBullits.map((item, index) => (
          <Card
            key={index}
            className="group hover:bg-[#B77466] relative mb-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <CardHeader>
              <CardDescription className="group-hover:text-secondary transition-colors duration-300">
                {item.description}
              </CardDescription>
            </CardHeader>
            <span className="absolute -top-3 -left-3 rotate-[280deg]">
              <TbPinFilled className="size-7 text-[#B77466] group-hover:text-primary " />
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Community;
