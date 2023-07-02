import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { FaBook, FaUniversity, FaSignOutAlt, FaPlusCircle, FaFileUpload } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiFillHome />,
  },
  {
    title: "Result",
    path: "/result",
    icon: <FaFileUpload />,
  },
  {
    title: "Department",
    path: "/department",
    icon: <FaUniversity />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Add",
        path: "/department/add_department",
        icon: <FaPlusCircle />,
      },
    
    ],
  },
  {
    title: "Subject",
    path: "/subject",
    icon: <FaBook />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Add",
        path: "/subject/add_subject",
        icon: <FaPlusCircle />,
        cName: "sub-nav",
      },
     
    ],
  },
  {
    title: "Logout",
    path: "/", // Update the path to the login page ("/")
    icon: <FaSignOutAlt />,
  },
];
