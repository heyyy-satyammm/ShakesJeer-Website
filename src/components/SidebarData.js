import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <RiIcons.RiTeamFill />,
    cName: "nav-text",
  },
  {
    title: "Events",
    path: "/event",
    icon: <MdIcons.MdEventSeat />,
    cName: "nav-text",
  },
  {
    title: "ShakesJournal",
    path: "/shakesjournal",
    icon: <IoIcons.IoIosJournal />,
    cName: "nav-text",
  },
  {
    title: "Resources",
    path: "/resources",
    icon: <CgIcons.CgNotes />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <IoIcons.IoMdContacts />,
    cName: "nav-text",
  },
  
];
