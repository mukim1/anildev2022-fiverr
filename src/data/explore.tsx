import { FiBarChart2, FiHome, FiSearch } from "react-icons/fi";
import { MdNotificationsNone, MdOutlineScience } from "react-icons/md";
import { RiGlobeLine, RiPsychotherapyLine } from "react-icons/ri";
import { MdOutlineCorporateFare } from "react-icons/md";
import { ImLeaf } from "react-icons/im";
import { IoAnalyticsSharp } from "react-icons/io5";
import {
  FaClinicMedical,
  FaGraduationCap,
  FaHistory,
  FaRegLightbulb,
} from "react-icons/fa";

export const exploreItems = [
  {
    id: 1,
    title: "Explore by category",
    items: [
      {
        id: 1,
        title: "Entrepreneurship",
        link: "/",
        icon: <MdNotificationsNone />,
      },
      {
        id: 2,
        title: "Science",
        link: "/",
        icon: <MdOutlineScience />,
      },
      {
        id: 3,
        title: "Economics",
        link: "/",
        icon: <RiGlobeLine />,
      },
      {
        id: 4,
        title: "Corporate Culture",
        link: "/",
        icon: <MdOutlineCorporateFare />,
      },
      {
        id: 5,
        title: "Psychology",
        link: "/",
        icon: <RiPsychotherapyLine />,
      },
      {
        id: 6,
        title: "Nature & Environment",
        link: "/",
        icon: <ImLeaf />,
      },
    ],
  },
  {
    id: 2,
    title: "See recently added titles",
    items: [
      {
        id: 1,
        title: "Politics",
        link: "/",
        icon: <FiHome />,
      },
      {
        id: 2,
        title: "Health & Nutrition",
        link: "/",
        icon: <FaClinicMedical />,
      },
      {
        id: 3,
        title: "History",
        link: "/",
        icon: <FaHistory />,
      },
      {
        id: 4,
        title: "Motivation & Inspiration",
        link: "/",
        icon: <FaRegLightbulb />,
      },
      {
        id: 5,
        title: "Productivity",
        link: "/",
        icon: <GrInProgress />,
      },
      {
        id: 6,
        title: "Career & Success",
        link: "/",
        icon: <FaGraduationCap />,
      },
    ],
  },
  {
    id: 3,
    title: "See popular titles",
    items: [
      {
        id: 1,
        title: "Marketing & Sales",
        link: "/",
        icon: <IoAnalyticsSharp />,
      },
      {
        id: 2,
        title: "Personal Development",
        link: "/",
        icon: <SiGoogleanalytics />,
      },
      {
        id: 3,
        title: "Communication Skills",
        link: "/",
        icon: <BiComment />,
      },
      {
        id: 4,
        title: "Money & Investments",
        link: "/",
        icon: <CiWallet />,
      },
      {
        id: 5,
        title: "Sex & Relationship",
        link: "/",
        icon: <GiSelfLove />,
      },
      {
        id: 6,
        title: "Education",
        link: "/",
        icon: <SlGraduation />,
      },
    ],
  },
];

import { GrInProgress } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { BiComment } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { SlGraduation } from "react-icons/sl";
