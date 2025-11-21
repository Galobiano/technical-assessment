import Oncalendar from "./Oncalendar";
import LatestUpdatesSection from "./LatestUpdatesSection";
import Community from "./Community";
import CalendarAndLetters from "./CalendarAndLetters";

const BulletInSection = () => {
  return (
    <div className="">
      <h1 className="flex flex-col items-center text-3xl font-bold mb-8">
        HAPPENING AT SOA COMMUNITY BULLETIN BOARD CALENDARS & NEWSLETTERS
      </h1>
      <div className="flex items-center py-10">
        <Oncalendar />

        <LatestUpdatesSection />
      </div>
      <Community />
      <CalendarAndLetters />
    </div>
  );
};

export default BulletInSection;
