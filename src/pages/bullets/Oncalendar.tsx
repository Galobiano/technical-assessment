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
    <section className="w-full flex justify-center items-center flex-col ml-25">
      <ScrollArea className="scrollbar scrollbar-none h-190 rounded-md shadow border p-7 bg-[#F3E8DF] max-w-xl rounded-lg">
        {calendar.map((item, index) => (
          <Card key={index} className="flex flex-col mt-4">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.detail}</CardDescription>
            </CardHeader>
            <div className="flex">
              <CardContent>{item.location}</CardContent>
              <CardContent>{item.dateAndTime}</CardContent>
            </div>
          </Card>
        ))}
      </ScrollArea>
    </section>
  );
}

export default Oncalendar;
