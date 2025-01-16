import { LuBookMinus, LuLayoutDashboard, LuUsers } from "react-icons/lu";
import { MdOutlineLibraryBooks, MdSpeed } from "react-icons/md";
import { PiChatsCircle } from "react-icons/pi";

export const sidebarMenuData = [
  {
    title: "Dashbaord",
    url: "/",
    icon: <LuLayoutDashboard />,
    roleAcces: ["admin", "user", "superadmin"],
  },
  {
    title: "Trafic",
    url: "/admin",
    icon: <MdSpeed />,
    roleAcces: ["admin", "superadmin"],
  },
  {
    title: "Trafic pengguna",
    url: "/admin/soal",
    icon: <LuBookMinus />,
    roleAcces: [
      "admin",
      "user",
      "superadmin",
      "admin_keuangan_ptanton",
      "admin_keuangan_wallet",
      "admin_keuangan_dadabe",
    ],
  },
  {
    title: "Users",
    url: "/users",
    icon: <LuUsers />,
    roleAcces: ["admin", "user", "superadmin"],
  },
  {
    title: "Projects",
    url: "/projects",
    icon: <MdOutlineLibraryBooks />,
    roleAcces: ["admin", "user", "superadmin"],
  },
  {
    title: "Money management",
    url: "#",
    icon: <LuLayoutDashboard />,
    roleAcces: ["admin", "user", "superadmin"],
  },
  {
    title: "chats",
    url: "/chats",
    icon: <PiChatsCircle />,
    roleAcces: [
      "admin",
      "user",
      "superadmin",
      "admin_keuangan_ptanton",
      "admin_keuangan_wallet",
      "admin_keuangan_dadabe",
      "admin_personality",
      "admin_morality",
    ],
  },
  {
    title: "User Morality",
    url: "#",
    icon: <LuLayoutDashboard />,
    roleAcces: ["admin", "admin_morality", "superadmin"],
  },
  {
    title: "User personality",
    url: "#",
    icon: <LuLayoutDashboard />,
    roleAcces: ["admin", "admin_personality", "superadmin"],
  },
  {
    title: "User acces management",
    url: "#",
    icon: <LuLayoutDashboard />,
    roleAcces: ["admin", "superadmin"],
  },
  {
    title: "general settings",
    url: "#",
    icon: <LuLayoutDashboard />,
    roleAcces: [
      "admin",
      "user",
      "superadmin",
      "admin_keuangan_ptanton",
      "admin_keuangan_wallet",
      "admin_keuangan_dadabe",
      "admin_personality",
      "admin_morality",
    ],
  },
];
