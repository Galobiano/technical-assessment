interface calendarDetails {
  numberDate: string;
  date: string;
  title: string;
  detail: string;
  location?: string;
  dateAndTime?: string;
}
export const calendar: calendarDetails[] = [
  {
    numberDate: "8",
    date: "NOV",
    title: `"Kitchen Sink" — 1st-Year MFA Exhibition`,
    detail: "Saturday, November 8 – Tuesday, November 25, 2025Green Hall",
    location: "1156 Chapel Street",
    dateAndTime: "Nov 8th 12:00 PM - 25th Nov 6:00 PM EST",
  },
  {
    numberDate: "22",
    date: "NOV",
    title: `Visiting Artist Lecture in Graphic Design: Geoff Han`,
    detail:
      "Thursday, November 206-7:30PM1156 Chapel St., Graphic Design Atrium The Fall 202...",
    location: "Green Hall, Graphic Design Atrium",
    dateAndTime: "6:00 PM - 7:30 PM EST",
  },
  {
    numberDate: "24",
    date: "NOV",
    title: `Monuments, Memory, and Black Futures Panel Discussion convened by Nikesha Breeze`,
    detail:
      "Hosted by NXTHVN Saturday, November 225PM-7PMNXTHVNFree RSVP on Eventbrite > Hea...",
    location: "NXTHVN",
    dateAndTime: "5:00 PM - 7:00 PM EST",
  },
  {
    numberDate: "01",
    date: "DEC",
    title: `Fall Classes resume`,
    detail: "Monday, Dec. 1",
  },
  {
    numberDate: "02",
    date: "NOV",
    title: `MFA Crits in Sculpture`,
    detail:
      "Sculpture critiques during the Fall 2025 semester are open to the School of Art ...",
    location: "36 Edgewood Ave., New Haven",
    dateAndTime: "12:00 PM - 3:30 PM EST",
  },
  {
    numberDate: "02",
    date: "NOV",
    title: `MBeyond Britain | "The Island of Barbados" w/Taisha Carrington`,
    detail:
      "Hosted by the Yale Center for British Art Tuesday, December 2, 202512:30–1 pm ET..",
    location: "Yale Center for British Art",
    dateAndTime: "12:30 PM - 1:00 PM EST",
  },
];
