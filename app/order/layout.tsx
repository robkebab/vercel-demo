import { Navbar } from "@/app/order/menu/[category]/navbar";
import type { ReactNode } from "react";
import { Footer } from "../../components/footer";

interface OrderLayoutProps {
  children: ReactNode;
}

export default function OrderLayout({ children }: OrderLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
