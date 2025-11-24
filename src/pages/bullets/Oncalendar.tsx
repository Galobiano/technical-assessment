import { calendar } from "@/constants/calendarData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Oncalendar() {
  return (
    <section className=" mb-20 pt-10 pb-2 bg-[#C9B59C]/15  pt-10 pb-10 px-15">
      <div className="grid grid-cols-3 gap-10 max-w-8xl mx-auto ">
        {calendar.map((item, index) => (
          <Card
            key={index}
            className="border-4 border-[#B77466]/50 border-l-[#B77466] flex flex-col pt-7 text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center font-bold ">
              <span className="text-5xl">{item.numberDate}</span>
              <span className="text-[#57595B]">{item.date}</span>
            </div>

            <CardHeader className="flex flex-col items-center text-center">
              <CardTitle className="font-bold">{item.title}</CardTitle>
              <CardDescription>{item.detail}</CardDescription>
            </CardHeader>

            <div className="flex flex-col items-center ">
              <CardContent className="flex items-center gap-2 ">
                <span>{item.iconLocation}</span>
                {item.location}
              </CardContent>

              <CardContent className="flex items-center gap-2 ">
                <span>{item.iconTime}</span>
                {item.dateAndTime}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Oncalendar;
