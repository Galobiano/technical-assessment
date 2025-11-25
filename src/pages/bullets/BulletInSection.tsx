import Oncalendar from "./Oncalendar";
import Community from "./Community";
import Notes from "./Notes";
import CalendarAndLetters from "./CalendarAndLetters";

const BulletInSection = () => {
  return (
    <div className="">
      <Notes />
      <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-t from-primary to-[#B77466] bg-clip-text text-transparent">
        HAPPENING AT SOA COMMUNITY BULLETIN BOARD CALENDARS & NEWSLETTERS
      </h1>

      <Oncalendar />

      {/* <LatestUpdatesSection /> */}

      <Community />
      <CalendarAndLetters />
    </div>
  );
};

export default BulletInSection;
