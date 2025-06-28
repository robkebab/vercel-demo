import {
  BookOpen,
  Drumstick,
  Globe,
  Hamburger,
  Mail,
  Menu,
  Rocket,
  ShoppingBag,
} from "lucide-react";

export const Icon = {
  BookOpen,
  Drumstick,
  Globe,
  Hamburger,
  Mail,
  Menu,
  Rocket,
  ShoppingBag,
} as const;

export type Icon = (typeof Icon)[keyof typeof Icon];

export type IconSlug = keyof typeof Icon;
