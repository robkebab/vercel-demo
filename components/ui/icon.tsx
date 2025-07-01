import {
  ArrowRightIcon,
  AtSignIcon,
  BookOpen,
  Drumstick,
  CircleAlert,
  Globe,
  Hamburger,
  KeyIcon,
  Mail,
  Menu,
  Rocket,
  ShoppingBag,
  Plus,
  Minus,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export const Icon = {
  ArrowRightIcon,
  AtSignIcon,
  BookOpen,
  Drumstick,
  CircleAlert,
  Globe,
  Hamburger,
  KeyIcon,
  Mail,
  Menu,
  Rocket,
  ShoppingBag,
  Plus,
  Minus,
  Facebook,
  Instagram,
  Twitter,
} as const;

export type Icon = (typeof Icon)[keyof typeof Icon];

export type IconSlug = keyof typeof Icon;
