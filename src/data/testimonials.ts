export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Shaaban",
    role: "DEvSYnc Agency founder",
    company: "DevSync Agency",
    content:
      "Honestly, Engineer Tarek, I’m not exaggerating when I say you are one of the most hardworking people I've ever worked with. You are incredibly skilled, and your approach makes anyone want to work with you. I really enjoyed collaborating with you; you are an ambitious and talented person, both technically and interpersonally. I hope this won’t be the last time we work together, and I’m proud to know you.",
    avatar: "/img/ahmed.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Mona Hassan",
    role: "Front-end developer at DevSync",
    company: "DevSync Agency",
    content:
      "Honestly, working with you was a great experience. You're a committed person who respects deadlines and is always keen to ensure the work is of the highest quality. You're easy to work with, receptive to feedback and strive to improve, which makes the team's work run smoothly. I'm happy I worked with you, and I hope we can collaborate again.",
    avatar: "/img/mona.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Alaa Eid",
    role: "Maintenance Assistant Manager",
    company: "Wadi Food Sadat Plant",
    content:
      "I highly recommend Tarek for working with any organization, as he combines strong expertise in software engineering and accounting systems. He consistently delivers accurate, efficient solutions with a high level of professionalism and analytical thinking.",
    avatar: "/img/Alaa.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Aya",
    role: "Front-end developer at DevSync",
    company: "DevSync Agency",
    content:
      "I really enjoyed the opportunity to work with Engineer Tarek. He is incredibly hardworking, skilled at what he does, and technically outstanding. Most importantly, his professional demeanor and refined style make the work environment comfortable and enjoyable for anyone collaborating with him. His ambition and dedication to delivering the best possible results are what truly set him apart. I am proud to know him, and I hope this won't be the last time we work together.",
    avatar: "/img/aye.png",
    rating: 5,
  },
];
