import {
  HomeIcon,
  HeartIcon,
  ShoppingBagIcon,
  CategoryIcon,
  BuildingStoreIcon,
  UserIcon,
  MessageIcon,
  GiftIcon,
} from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Home",
    icon: HomeIcon,
    to: "/",
  },
  {
    title: "Chat",
    icon: MessageIcon,
    to: "/customer-support",
  },
  { header: "Shopping" },


  {
    title: "Favorites",
    icon: HeartIcon,
    to: "/wishlist",
  },
  { header: "Extra" },
];

export default sidebarItem;
