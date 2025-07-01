import { Button } from "@/components/ui/button";
import { Icon } from "../../../../components/ui/icon";
import Image from "next/image";
import { YourOrderButton } from "./your-order-button";
import Link from "next/link";
import { AccountButton } from "./account-button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-2 md:px-4 py-2 border-b border-gray-100 bg-background mb-4 md:mb-6">
      <div className="flex items-center gap-2 flex-shrink-0">
        <button className="md:hidden p-2" aria-label="Open menu">
          <Icon.Menu className="w-6 h-6 text-primary" />
        </button>
        <span className="hidden md:inline-flex">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Tommy Want Wingy"
              width={32}
              height={32}
            />
          </Link>
        </span>
        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-xs text-gray-400">Carry-out</span>
          <span className="text-sm font-semibold text-primary">Location</span>
        </div>
        <Button
          variant="ghost"
          className="hidden md:inline-flex ml-1 text-xs text-primary px-1 py-0 h-auto"
        >
          Change
        </Button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Link
          href="/order/menu/combos"
          className="hidden md:inline text-primary font-semibold"
        >
          Menu
        </Link>
        <span className="md:hidden">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Tommy Want Wingy"
              width={32}
              height={32}
            />
          </Link>
        </span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <AccountButton />
        <YourOrderButton />
      </div>
    </nav>
  );
}
