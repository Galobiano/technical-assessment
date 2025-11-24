import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const newCalendar = [
  {
    title: "Public Calendar",
    detail: "Containing those events open to the public.",
  },
  {
    title: "School of Art in the World ",
    detail:
      "Containing events and exhibitions hosted by, led by, or featuring members of the School of Art community.",
  },
  {
    title: "School of Art in the World ",
    detail:
      "Containing events and exhibitions hosted by, led by, or featuring members of the School of Art community.",
  },
];

const Newsletters = [
  {
    title: "News From New Haven",
    detail:
      " A public monthly newsletter about news and events happening on campus.",
  },
  {
    title: "Week at SoA ",
    detail:
      " A weekly community-only email listing SoA events as well as public and university events in New Haven.",
  },
];

const CalendarAndLetters = () => {
  return (
    <div className="py-15 ">
      <h1 className="text-center">Calendars & Newsletters</h1>

      <div>
        <div className="grid grid-cols-2 w-full gap-7  max-w-4xl mx-auto mt-8 ">
          <Card className="bg-[#B77466] text-secondary mb-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="flex justify-center">
                NEW CALENDARS BEGINNING SUMMER 2020
              </CardTitle>
            </CardHeader>
            {newCalendar.map((item, index) => (
              <div key={index} className="">
                <ul className="px-10">
                  <li className="list-disc">
                    {item.title}
                    <strong>{item.detail}</strong>
                  </li>
                </ul>
              </div>
            ))}
          </Card>

          <Card className="bg-[#B77466] text-secondary mb-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="flex justify-center ">
                Get news from the Yale School of Art in your inbox: Sign up for
                our newsletters
              </CardTitle>
            </CardHeader>
            {Newsletters.map((item, index) => (
              <div key={index}>
                <ul className="px-10">
                  <li className="list-disc">
                    {item.title}
                    <strong>{item.detail}</strong>
                  </li>
                </ul>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalendarAndLetters;
