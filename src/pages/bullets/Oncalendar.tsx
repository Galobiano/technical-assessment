import { calendar } from "@/constants/calendarData";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Oncalendar() {
  return (
    <section className=" ">
      <div className="grid grid-cols-3 gap-10 rounded-md shadow border p-7 bg-[#F3E8DF]  rounded-lg">
        {calendar.map((item, index) => (
          <Card key={index} className="flex flex-col p-5 text-primary ">
            <div className="flex flex-col items-center font-bold ">
              <span className="text-4xl">{item.numberDate}</span>
              <span className="text-[#57595B]">{item.date}</span>
            </div>
            <CardHeader className="flex flex-col items-center text-center">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.detail}</CardDescription>
            </CardHeader>
            <div className="flex flex-col items-center ">
              <CardContent>{item.location}</CardContent>
              <CardContent>{item.dateAndTime}</CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Oncalendar;
